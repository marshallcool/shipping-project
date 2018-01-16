import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import {
  MatDialog, MatDialogRef, MatSnackBar
} from '@angular/material';

import { AuthService } from '../../services/auth.service';
import { LoginService } from './login.service';
import { LoginCompleteDialogComponent } from './login-complete-dialog/login-complete-dialog';

function validateEmail(c: FormControl) {
  const EMAIL_REGEXP = (/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

function validatePassword(c: FormControl) {
  const PASSWORD_REGEXP = (/^[a-zA-Z0-9].{3,20}$/);

  return PASSWORD_REGEXP.test(c.value) ? null : {
    validatePassword: {
      valid: false
    }
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  subscriptions: Subscription[] = [];
  loginForm: FormGroup;
  regForm: FormGroup;
  user: any = [];
  remember = false;
  isRegistry = false;
  loadingLogin = false;
  loading = false;
  loginErr = false;

  constructor( @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private mdDialog: MatDialog) {
  }

  ngOnInit() {
    this.buildLoginForm();
    this.buildRegForm();
  }

  // Login
  buildLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, validatePassword]),
    });
  }

  getErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'Обязательное поле' :
      this.loginForm.get('email').hasError('email') ? 'Не валдиный email' :
        '';
  }

  onLoginSubmit() {
    this.loadingLogin = true;
    if (this.loginForm.valid) {
      this.loginForm.get('email').disable();
      this.loginForm.get('password').disable();
      this.authService.signIn(this.loginForm.value)
        .subscribe(
        value => {
          this.authService.getAddress().subscribe(address => console.log(address))
          this.loadingLogin = false;
          this.router.navigate(['']);
        }, error2 => {
          this.loginErr = true;
          this.loadingLogin = false;
          this.loginForm.get('email').enable();
          this.loginForm.get('password').enable();
          this.snackBar.open('Проверьте правильность данных', '', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            extraClasses: ['warning-bar'],
            duration: 3000,
          });
        });
    } else {
      this.loadingLogin = false;
      this.snackBar.open('Проверьте правильность данных', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: ['warning-bar'],
        duration: 3000,
      });
    }
  }

  // End Login

  // Registr
  buildRegForm() {
    this.regForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'surname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
        validateEmail]),
      'password': new FormControl('', [Validators.required, validatePassword]),
      'promocode': new FormControl(''),
    });
  }

  onRemember() {
    this.remember = !this.remember;
  }

  onRegSubmit() {
    this.loading = true;
    if (this.regForm.valid) {
      this.regForm.get('name').disable();
      this.regForm.get('surname').disable();
      this.regForm.get('email').disable();
      this.regForm.get('password').disable();
      this.regForm.get('promocode').disable();
      this.loginService.register(this.regForm.value)
        .subscribe(x => {
          this.isRegistry = true;
          this.loading = false;
          const dialogRef: MatDialogRef<LoginCompleteDialogComponent> = this.mdDialog.open(
            LoginCompleteDialogComponent,
            {
              width: '80vw',
              height: '60vh',
              disableClose: true,
            });

          dialogRef.afterClosed()
            .subscribe(result => {
              this.router.navigate(['/']);
            });
        });
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

  // End Registr

  forgotPass() {
  }
}
