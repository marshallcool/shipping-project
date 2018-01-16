import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  AfterContentInit
} from '@angular/core';

import { MatSnackBar } from '@angular/material';

import * as $ from 'jquery';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { OrderService } from './../order/order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-simple-tiny',
  styleUrls: [ './simple-tiny.component.scss' ],
  template: `<textarea id='{{elementId}}'></textarea>
  <div class="form-group form-tiny">
    <label
      class="material-input"
    >
      <span>Имя<span class="dark-orange">*</span></span>
      <input
        class="input-control"
        type="text"
        [formControl]="addressForm.controls['url']"
      />
    </label>
    <label *ngIf="addressForm.controls['url'].invalid && addressForm.controls['url'].touched"
           class="data-error">Обязательное поле</label>
  </div>
  <div class="form-group form-group--inline">
    <label for="" class="material-input"
           [ngClass]="{'hovered':addressForm.controls['count'].value}"
    >
      <span>Количество</span>
      <input
        class="input-control"
        type="text"
        [formControl]="addressForm.controls['count']"
      />
    </label>
    <label for="" class="material-input"
           [ngClass]="{'hovered':addressForm.controls['price'].value}"
    >
      <span>Цена</span>
      <input
        class="input-control"
        type="text"
        [formControl]="addressForm.controls['price']"
      />
    </label>
    <label for="" class="material-input"
           [ngClass]="{'hovered':addressForm.controls['promo'].value}"
    >
      <span>Промокод</span>
      <input
        class="input-control"
        type="text"
        [formControl]="addressForm.controls['promo']"
      />
    </label>
    <label for="" class="material-input"
           [ngClass]="{'hovered':addressForm.controls['sale'].value}"
    >
      <span>Скидка</span>
      <input
        class="input-control"
        type="text"
        [formControl]="addressForm.controls['sale']"
      />
    </label>
  </div>
  <button class="btn" (click)='sendOrd()'>Отправить</button>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy, AfterContentInit {
  addressForm: FormGroup = this.fb.group(
    {
      url: ['', Validators.required],
      content: '',
      count: '',
      price: '',
      promo: '',
      sale: ''
    });

  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private orderService: OrderService,
              private snackBar: MatSnackBar) {
  }

  editor;
  public content: any;
  subscriptions: Subscription[] = [];

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

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [ 'link', 'paste', 'table' ],
      skin_url: './../../assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.content = content;
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  sendOrd() {
    this.addressForm.patchValue({
      content: this.content
    });
    if (this.addressForm.valid) {
      this.orderService.sendParcel(this.addressForm.value)
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

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
