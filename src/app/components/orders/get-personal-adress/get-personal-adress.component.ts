import { Component, OnInit, Inject } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import {
  MatSnackBar
} from '@angular/material';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { GetPersonalAddressService } from './get-personal-adress.service';

@Component({
  selector: 'app-get-personal-adress',
  templateUrl: './get-personal-adress.component.html',
  styleUrls: ['./get-personal-adress.component.scss']
})
export class GetPersonalAdressComponent implements OnInit {
  subscriptions: Subscription[] = [];
  addressDE: any;
  addressPA: any;
  loading = false;

  personalAddress: FormGroup;
  address: any;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private getPersonalAdressService: GetPersonalAddressService,
    private snackBar: MatSnackBar,
  ) {
    this.personalAddress = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
    });
  }

  public country = [
    {
      name: 'Делавер'
    },
    {
      name: 'Пенсильвания'
    }
  ];

  serviceIdx = 0;

  toogleService(index, count) {
    this.serviceIdx = index;
    if (count.name === 'Делавер') {
      this.address = this.addressDE;
    } else if (count.name === 'Пенсильвания') {
      this.address = this.addressPA;
    }
  }

  ngOnInit() {
    this.loading = true;
    this.getPersonalAdressService.getAddress()
      .subscribe(addresses => {
        this.addressDE = addresses.addresses.DE;
        this.addressPA = addresses.addresses.PA;
        this.address = this.addressDE;
        this.loading = false;
      });
  }

}
