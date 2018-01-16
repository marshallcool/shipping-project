import {Component, Inject} from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';

import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import { NavService } from '../../../nav/nav.service';

@Component({
  selector: 'app-get-personal-address-dialog',
  templateUrl: './get-personal-address-dialog.html',
  styleUrls: ['./get-personal-address-dialog.scss'],
})
export class GetPersonalAddressDialogComponent {
  personalAddress: FormGroup = this.fb.group(
    {
      first_name: [ '', Validators.required ],
      last_name: [ '', Validators.required ],
      phone: [ '', Validators.required ]
    });

  constructor(private dialogRef: MatDialogRef<GetPersonalAddressDialogComponent>,
              private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private navService: NavService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose() {
    this.dialogRef.close();
  }

  sendAddress() {
    if (this.personalAddress.valid) {
      this.navService.sendAddress(this.personalAddress.value)
        .subscribe(address => {
          this.dialogRef.close();
          this.router.navigate(['orders']);
        });
    } else {
      this.snackBar.open('Проверьте правильность данных', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: ['warning-bar'],
        duration: 3000,
      });
    }
  }
}

