import { Component, OnInit, AfterContentInit, Inject, EventEmitter, Output } from '@angular/core';

import { OrderService } from './../../order.service';

import { CustomValidators } from 'ng2-validation';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {
  MatSnackBar
} from '@angular/material';

import * as $ from 'jquery';

@Component({
  selector: 'app-order-add-form',
  templateUrl: './order-add-form.component.html',
  styleUrls: [ './order-add-form.component.scss' ]
})
export class OrderAddFormComponent implements OnInit, AfterContentInit {
  public order: any;
  public name = '';
  public selectedIdx = 1;
  public id: any;

  @Output() addOrder = new EventEmitter<any>();

  newParcel: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private orderService: OrderService,
              private snackBar: MatSnackBar) {

    this.newParcel = new FormGroup({
      'id': new FormControl(''),
      'link': new FormControl('', Validators.required),
      'title': new FormControl(''),
      'quantity': new FormControl('', [ CustomValidators.number, Validators.required ]),
      'article': new FormControl(''),
      'price': new FormControl(''),
      'code': new FormControl(''),
      'sale': new FormControl(''),
      'comment': new FormControl(''),
      'total': new FormControl('')
    });
  }

  ngOnInit() {
  }

  toogleActive(index) {
    this.selectedIdx = index;
  }

  addParcel() {
    this.id = Math.random();
    if (this.newParcel.value.quantity && this.newParcel.value.price) {
      const total = this.newParcel.value.quantity * this.newParcel.value.price;
      this.newParcel.patchValue({
        total: total,
        id: this.id
      });
    }
    if (this.newParcel.valid) {
      this.addOrder.emit(this.newParcel.value);
      this.orderService.addParcel(this.newParcel.value)
        .subscribe(x => console.log(x));
      this.newParcel.reset();
      this.snackBar.open('Успешно добавлено', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'success-bar' ],
        duration: 3000,
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

