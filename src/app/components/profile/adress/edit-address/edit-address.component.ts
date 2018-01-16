import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProfileService } from '../../profile.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-adress-edit',
  templateUrl: './edit-address.component.html',
  styleUrls: [ './edit-address.component.scss' ]
})
export class EditAddressComponent implements OnInit {
  loading = false;
  country: any;
  countryCtrl: FormControl;
  reactiveCountry: any;

  state: any;
  stateCtrl: FormControl;
  reactiveState: any;

  addressForm: FormGroup = this.fb.group(
    {
      id: '',
      first_name: [ '', Validators.required ],
      last_name: [ '', Validators.required ],
      country: [ '', Validators.required ],
      country_id: '',
      state: '',
      city: [ '', Validators.required ],
      province: '',
      district: '',
      postalcode: [ '', Validators.required ],
      address: [ '', Validators.required ],
      house: '',
      unit: '',
      apartment: '',
      phone: '',
    });

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) {
    this.stateCtrl = new FormControl();
    this.reactiveState = this.stateCtrl.valueChanges
      .startWith(this.stateCtrl.value)
      .map(title => this.filterState(title));
    this.countryCtrl = new FormControl();
    this.reactiveCountry = this.countryCtrl.valueChanges
      .startWith(this.countryCtrl.value)
      .map(title => this.filterCountry(title));
  }

  saveAddress() {
    this.addressForm.patchValue({
      country: this.countryCtrl.value,
      country_id: this.countryCtrl.value,
      state: this.stateCtrl.value
    });
    const countryCode = this.country.filter((item) => item.title === this.addressForm.value.country);
    const stateCode = this.state.filter((item) => item.title === this.addressForm.value.state);
    if (this.stateCtrl.value) {
      this.addressForm.patchValue({
        state: stateCode[ 0 ].code
      });
    }
    this.addressForm.patchValue({
      country: countryCode[0].code,
      country_id: countryCode[0].id
    });
    if (this.addressForm.valid) {
      this.profileService.editAddress(this.addressForm.value)
        .subscribe(x => {
          this.snackBar.open('Адресс успешно изменен', '', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            extraClasses: [ 'success-bar' ],
            duration: 3000,
          });
        });
    } else {
      this.snackBar.open('Проверьте правильность данных', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

  ngOnInit() {
    this.loading = true;
    this.country = this.profileService.changeAddress();
    this.state = this.profileService.changeState();
    this.route.params.switchMap(params => {
      const addressUrl = params[ 'id' ];
      return this.profileService.getAddressId(addressUrl);
    })
      .subscribe(x => {
        this.loading = false;
        if (x) {
          this.country.map(item => {
            if (x.country === item.code) {
              x.country = item.title;
            }
          });
          this.state.map(item => {
            if (x.state === item.code) {
              x.state = item.title;
            }
          });
          this.stateCtrl.patchValue(x.state);
          this.countryCtrl.patchValue(x.country);
          this.addressForm.patchValue({
            ...x
          });
        }
      });
  }

  filterCountry(val: string) {
    return val ? this._filter(this.country, val) : this.country;
  }

  filterState(val: string) {
    return val ? this._filter(this.state, val) : this.state;
  }

  private _filter(country: any, val: string) {
    const filterValue = val.toLowerCase();
    return country.filter(count => count.title.toLowerCase().startsWith(filterValue));
  }

}
