import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {
  Router,
  NavigationEnd,
  Event
} from '@angular/router';
import 'rxjs/add/operator/filter';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: [ './adress.component.scss' ]
})
export class AdressComponent implements OnInit {
  isShowToogle = true;
  addresses: any;
  loading = false;

  constructor(private profileService: ProfileService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.profileService.address$.subscribe(x => {
      this.getAddress();
    });
    this.router.events
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          if (event.url !== '/profile/adress') {
            this.isShowToogle = false;
          } else {
            this.isShowToogle = true;
          }
        }
      });
  }
  country: any;
  resultAddress: any;

  getAddress() {
    this.loading = true;
    this.profileService.getAddress()
      .subscribe(x => {
        this.loading = false;
        this.addresses = x.addresses;
        this.resultAddress = this.addresses.filter(item1 => this.country.find(item2 => item2.id === item1.country_id)).map(item1 => {
          return {...item1, country: this.country.find(item2 => item1.country_id === item2.id).title};
        });
      });
  }
  ngOnInit() {
    this.profileService.notifyOther({option: 'adress', value: 'Адрес доставки'});
    this.country = this.profileService.changeAddress();
  }

  removeAddress(id) {
    this.profileService.deleteAddress(id)
      .subscribe(x => {
        this.snackBar.open('Успешно удаленно', '', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          extraClasses: [ 'success-bar' ],
          duration: 3000,
        });
      });
  }

}
