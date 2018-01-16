import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ProfileService } from '../profile.service';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: [ './billing.component.scss' ]
})
export class BillingComponent implements OnInit {
  country: any;
  countryCtrl: FormControl;
  reactiveCountry: any;

  personalData: FormGroup;
  toogleShow: boolean;
  loading = false;

  state: any;
  stateCtrl: FormControl;
  reactiveState: any;

  isState: boolean;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private profileService: ProfileService,
              private snackBar: MatSnackBar,
              private langService: LangService) {
    this.stateCtrl = new FormControl();
    this.reactiveState = this.stateCtrl.valueChanges
      .startWith(this.stateCtrl.value)
      .map(title => this.filterState(title));
    this.countryCtrl = new FormControl();
    this.reactiveCountry = this.countryCtrl.valueChanges
      .startWith(this.countryCtrl.value)
      .map(title => this.filterCountry(title));
    this.personalData = new FormGroup({
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'state': new FormControl(''),
      'zip': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
    });
    this.profileService.completeBillingInfo
      .subscribe((value) => {
        if (value === true) {
          this.toogleShow = true;
        }
      });
    this.langService.getCountry()
      .subscribe(x => {
        const country = (x as any).country;
        if (country === 'RU') {
          this.isState = false;
        } else {
          this.isState = true;
        }
      });
  }

  saveData() {
    this.loading = true;
    this.personalData.patchValue({
      country: this.countryCtrl.value
    });
    if (this.personalData.valid) {
      const countryCode = this.country.filter((item) => item.title === this.personalData.value.country);
      this.personalData.patchValue({
        country: countryCode[ 0 ].code
      });
      this.profileService.setBilling(this.personalData.value)
        .subscribe(x => {
          this.loading = false;
          this.snackBar.open('Информация успешно обновлена', '', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            extraClasses: [ 'success-bar' ],
            duration: 3000,
          });
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
  }

  updateData() {
    this.loading = true;
    this.personalData.patchValue({
      country: this.countryCtrl.value,
      state: this.stateCtrl.value
    });
    const countryCode = this.country.filter((item) => item.title === this.personalData.value.country);
    const stateCode = this.state.filter((item) => item.title === this.personalData.value.state);
    this.personalData.patchValue({
      country: countryCode[ 0 ].code,
      state: stateCode[ 0 ].code
    });
    if (this.personalData.valid) {
      this.profileService.updateBilling(this.personalData.value)
        .subscribe(
          x => {
            this.loading = false;
            this.snackBar.open('Информация успешно обновлена', '', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
              extraClasses: [ 'success-bar' ],
              duration: 3000,
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
  }

  ngOnInit() {
    this.loading = true;
    this.country = this.profileService.changeAddress();
    this.state = this.profileService.changeState();
    this.profileService.getBilling()
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
          this.countryCtrl.patchValue(x.country);
          this.stateCtrl.patchValue(x.state);
          this.personalData.patchValue({
            ...x
          });
          this.toogleShow = false;
        } else {
          this.toogleShow = true;
        }
      });
    this.profileService.notifyOther({option: 'billing', value: 'Платежная информация'});
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
