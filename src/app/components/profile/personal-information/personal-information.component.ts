import { Component, OnInit, AfterContentInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import * as $ from 'jquery';

import { MatSnackBar } from '@angular/material';

import { ProfileService } from '../profile.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: [ './personal-information.component.scss', '../profile.component.scss' ]
})
export class PersonalInformationComponent implements OnInit, AfterContentInit {
  stateCtrl: FormControl;
  personalData: FormGroup;
  user: any;
  tooglePersonalInfo: boolean;
  reactiveStates: any;
  country: any;
  loading = false;

  constructor(private route: ActivatedRoute,
              @Inject(FormBuilder) fb: FormBuilder,
              private profileService: ProfileService,
              private snackBar: MatSnackBar) {
    this.stateCtrl = new FormControl();
    this.reactiveStates = this.stateCtrl.valueChanges
      .startWith(this.stateCtrl.value)
      .map(title => this.filterCountry(title));
    this.personalData = new FormGroup({
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'zip': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'mail': new FormControl('', Validators.required)
    });
    this.profileService.completePersonalInfo
      .subscribe((value) => {
        if (value === true) {
          this.tooglePersonalInfo = true;
        }
      });
  }

  filterCountry(val: string) {
    return val ? this._filter(this.country, val) : this.country;
  }

  private _filter(country: any, val: string) {
    const filterValue = val.toLowerCase();
    return country.filter(count => count.title.toLowerCase().startsWith(filterValue));
  }

  updateData() {
    this.loading = true;
    this.personalData.patchValue({
      country: this.stateCtrl.value
    });
    const countryCode = this.country.filter((item) => item.title === this.personalData.value.country);
    this.personalData.patchValue({
      country: countryCode[ 0 ].code
    });
    if (this.personalData.valid) {
      this.profileService.editPersonalInfo(this.personalData.value)
        .subscribe(
          x => {
            this.loading = false;
            this.snackBar.open('Информация успешно обновлена', '', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
              extraClasses: [ 'success-bar' ],
              duration: 3000,
            });
          }, error => {
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

  saveData() {
    this.loading = true;
    this.personalData.patchValue({
      country: this.stateCtrl.value
    });
    if (this.personalData.valid) {
      const countryCode = this.country.filter((item) => item.title === this.personalData.value.country);
      this.personalData.patchValue({
        country: countryCode[ 0 ].code
      });
      this.profileService.setPersonalInfo(this.personalData.value)
        .subscribe(
          x => {
            this.loading = false;
            this.snackBar.open('Информация успешно добавлена', '', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
              extraClasses: [ 'success-bar' ],
              duration: 3000,
            });
          }, error => {
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

  ngOnInit(): void {
    this.country = this.profileService.changeAddress();
    this.profileService.notifyOther({option: 'personalInformation', value: 'Личная информация'});
    this.route.data
      .subscribe(x => {
        if (x) {
          this.country.map(item => {
            const count = String(item.id);
            if (x.personal.country === count) {
              x.personal.country = item.title;
            }
          });
          this.stateCtrl.patchValue(x.personal.country);
          this.personalData.patchValue({
            ...x.personal,
            stack: '123'
          });
          if (x.personal.first_name) {
            this.personalData.get('first_name').disable();
          }
          if (x.personal.last_name) {
            this.personalData.get('last_name').disable();
          }
          if (x.personal.mail) {
            this.personalData.get('mail').disable();
          }
          if (x.personal.first_name != null && x.personal.last_name != null) {
            this.tooglePersonalInfo = true;
          }
        } else {
          this.tooglePersonalInfo = false;
        }
      });
  }

  ngAfterContentInit() {
    $('.material-input').on('focus', '.input-control', function (e) {
      const parent = $(this).parent('.material-input');
      parent.addClass('hovered');
    });
    $('.material-input__error').on('focus', '.input-control', function (e) {
      const parent = $(this).parent('.material-input__error');
      parent.addClass('hovered-error');
    });

    $('.material-input__error').on('blur', '.input-control', function (e) {
      if ($(this).val() === '') {
        $(this).parent('.material-input__error').removeClass('hovered-error');
      }
    });

    $('.material-input').on('blur', '.input-control', function (e) {
      if ($(this).val() === '') {
        $(this).parent('.material-input').removeClass('hovered');
      }
    });
  }

}
