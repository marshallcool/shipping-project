import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ContactService } from './contact.service';
import * as contact from './actions/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentInit {
  contactForm: FormGroup;
  themes: Observable<any>;
  loading: boolean;

  constructor(private fb: FormBuilder,
              private contactService: ContactService,
              private store: Store<any>,
              private snackBar: MatSnackBar
            ) {
    this.themes = store.select('contacts').map(({data}) => data.themes);
    store.select('contacts')
      .subscribe(loading => {
        this.loading = true;
        if (loading.data.themes || loading.data.subject_id) {
          this.loading = false;
        }
      });
  }

  ngOnInit() {
    this.store.dispatch(new contact.GetContact());
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      subject_id: ['', Validators.required],
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.store.dispatch(new contact.AddContact(this.contactForm.value));
      this.contactForm.reset();
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

  onChange(data) {
    if (data) {
      this.contactForm.patchValue({
        subject_id: data.value.id
      });
    }
  }

  ngAfterContentInit() {
    $('.select-contact').select2({
      placeholder: 'Выберите тему'
    });
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
