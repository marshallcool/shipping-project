import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {
  MatSnackBar
} from '@angular/material';

import * as $ from 'jquery';

import { Forwarding } from './../../../models/forwarding';

import { AddParcelService } from './add-parcel.service';

import { CustomValidators } from 'ng2-validation';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: [ './add-parcel.component.scss' ]
})
export class AddParcelComponent implements OnInit, AfterContentInit {
  subscriptions: Subscription[] = [];
  newParcel: FormGroup;
  public parcels: Forwarding;
  loading = false;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private snackBar: MatSnackBar,
              private addParcelService: AddParcelService) {
    this.newParcel = new FormGroup({
      'tracking_number': new FormControl('', Validators.required),
      'shop_title': new FormControl('', Validators.required),
      'value': new FormControl('', [ CustomValidators.number, Validators.required ]),
      'title': new FormControl('', Validators.required),
    });
  }

  example = {first: '', last: ''};

  addParcel() {
    this.loading = true;
    if (this.newParcel.valid) {
      this.addParcelService.addParcel(this.newParcel.value)
        .subscribe(parcel => {
          this.loading = false;
          this.snackBar.open('Добавлено', '', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            extraClasses: ['success-bar'],
            duration: 3000,
          });
        }, err => {
          this.loading = false;
          console.log(err)
        });
      this.newParcel.reset();
    } else {
      this.loading = false;
      this.snackBar.open('Проверьте правильность данных', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: ['warning-bar'],
        duration: 3000,
      });
    }
  }

  ngOnInit() {
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
