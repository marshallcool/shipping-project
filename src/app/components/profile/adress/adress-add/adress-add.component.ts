import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { ProfileService } from '../../profile.service';
import { AddAddressCompleteDialogComponent } from '../address-add-complete-dialog/address-add-complete-dialog.component';

@Component({
  selector: 'app-adress-add',
  templateUrl: './adress-add.component.html',
  styleUrls: [ './adress-add.component.scss' ]
})
export class AdressAddComponent implements OnInit {
  loading = false;
  country: any;
  countryCtrl: FormControl;
  reactiveCountry: any;

  state: any;
  stateCtrl: FormControl;
  reactiveState: any;

  addressForm: FormGroup = this.fb.group(
    {
      first_name: [ '', Validators.required ],
      last_name: [ '', Validators.required ],
      country: [ '', Validators.required ],
      state: '',
      city: [ '', Validators.required ],
      province: '',
      district: '',
      zip: [ '', Validators.required ],
      address: [ '', Validators.required ],
      house: '',
      unit: '',
      apartment: '',
      phone: '',
    });

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              private mdDialog: MatDialog,
              private router: Router,
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

  ngOnInit() {
    this.country = this.profileService.changeAddress();
    this.state = this.profileService.changeState();
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

  sendAdress() {
    this.loading = true;
    if (this.countryCtrl.value) {
      this.addressForm.patchValue({
        country: this.countryCtrl.value,
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
        country: countryCode[ 0 ].code
      });
      if (this.addressForm.valid) {
        this.profileService.addAdress(this.addressForm.value)
          .subscribe(
            x => {
              this.loading = false;
              const dialogRef: MatDialogRef<AddAddressCompleteDialogComponent> = this.mdDialog.open(
                AddAddressCompleteDialogComponent,
                {
                  width: '80vw',
                  height: '60vh',
                  disableClose: true,
                });

              dialogRef.afterClosed()
                .subscribe(result => {
                  this.router.navigate([ 'profile/adress' ]);
                });
            }, err => {
              this.loading = false;
            });
      } else {
        this.loading = false;
        this.snackBar.open('Не все поля заполненны', '', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          extraClasses: [ 'warning-bar' ],
          duration: 3000,
        });
      }
    } else {
      this.loading = false;
      this.snackBar.open('Не все поля заполненны', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

}
