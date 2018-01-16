import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { ProfileService } from './profile.service';

@Injectable()
export class GuardProfileService implements CanActivate {
  address: any;
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private snackBar: MatSnackBar
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
    // this.address = this.profileService.isPersonalInfo();
    // if (this.address.first_name != null && this.address.last_name != null) {
    //   return true;
    // } else if (this.address.first_name === null && this.address.last_name === null) {
    //   this.router.navigate(['profile/personal-info']);
    //   this.snackBar.open('Заполните личную информацию', '', {
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right',
    //     extraClasses: [ 'warning-bar' ],
    //     duration: 3000,
    //   });
    // }
  }
}
