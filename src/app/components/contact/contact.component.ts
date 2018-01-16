import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

import { Store } from '@ngrx/store';
import { getContacts } from './reducers/contact.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentInit {
  contactForm: FormGroup;
  themes: any;
  todos: Observable<any>;

  constructor(private fb: FormBuilder,
              private contactService: ContactService,
              private store: Store<any>) {
    this.todos = store.select('contacts').map(({data}) => Object.values(data));
  }

  ngOnInit() {
    this.store.dispatch(getContacts());
    this.initForm();
    // this.contactService.getThemes().subscribe(themes => this.themes = themes);
    this.themes = [
      {
        id: 1,
        value: 'theme 1'
      },
      {
        id: 2,
        value: 'theme 2'
      }
    ];
  }

  initForm() {
    this.contactForm = this.fb.group({
      theme: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    // this.contactService.sendMessage(this.contactForm.value)
    //   .subscribe(contact => {
    //     ...
    //   })
  }

  onChange(data) {
    if (data) {
      this.contactForm.patchValue({
        theme: data.value.value
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
