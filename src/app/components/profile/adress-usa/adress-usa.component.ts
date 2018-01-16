import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-adress-usa',
  templateUrl: './adress-usa.component.html',
  styleUrls: ['./adress-usa.component.scss']
})
export class AdressUsaComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.notifyOther({option: 'adressUsa', value: 'Адрес в США'});
  }

}
