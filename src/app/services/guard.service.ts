import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material';

import { AuthService } from './auth.service';

import cnst from '../tools/constants';

import { GetPersonalAddressDialogComponent } from '../components/orders/get-personal-adress/get-personal-address-dialog/get-personal-address-dialog';

const urls = cnst.URLS;


@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private matDialog: MatDialog
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuth()) {
      return true;
    } else if (!this.authService.isAuth()) {
      this.router.navigate([urls.login]);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.isPersonalAddress())
    if (this.authService.isPersonalAddress()) {
      return true;
    } else if (!this.authService.isPersonalAddress()) {
      const dialogRef: MatDialogRef<GetPersonalAddressDialogComponent> = this.matDialog.open(
        GetPersonalAddressDialogComponent,
        {
          width: '80vw',
          height: '60vh',
        });

      dialogRef.afterClosed()
        .subscribe(result => {
          // this.router.navigate([ 'profile/adress' ]);
        });
    }
  }
}
