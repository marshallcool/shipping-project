import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: [ './password.component.scss' ]
})
export class PasswordComponent implements OnInit {
  loading = false;

  constructor(private profileService: ProfileService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  passwordForm: FormGroup = this.fb.group(
    {
      password_old: [ '', Validators.required ],
      current_password: [ '', Validators.required ],
      password: [ '', Validators.required ],
    });

  ngOnInit() {
    this.profileService.notifyOther({option: 'password', value: 'Смена пароля'});
  }

  editPassword() {
    this.loading = true;
    if (this.passwordForm.value.current_password === this.passwordForm.value.password) {
      if (this.passwordForm.value.current_password.length > 0 && this.passwordForm.value.password.length > 0 && this.passwordForm.value.password_old.length > 0) {
        this.profileService.editPassword(this.passwordForm.value)
          .subscribe(
            data => {
              this.loading = false;
              this.passwordForm.patchValue({
                password_old: '',
                current_password: '',
                password: ''
              });
              this.snackBar.open('Пароль успешно изменен', '', {
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
        this.snackBar.open('Поля не должны быть пустыми', '', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          extraClasses: [ 'warning-bar' ],
          duration: 3000,
        });
      }
    } else {
      this.loading = false;
      this.snackBar.open('Пароли не совпадают', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

}
