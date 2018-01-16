import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ApiErrorHandlerService {
  err: any;

  constructor(private _router: Router,
              private snackBar: MatSnackBar,
              private authService: AuthService) {
  }

  handle(error: any): void {
    let message: string;
    this.err = error.error.error;
    if (error.error.statusCode === 403 || error.error.statusCode === 401) {
      message = 'Необходима авторизация';
      this.authService.signOut();
      this._router.navigate([ 'login' ]);
      this.snackBar.open(message, '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    } else {
      this.snackBar.open(this.err, '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }
}
