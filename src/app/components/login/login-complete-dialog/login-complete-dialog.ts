import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-complete-dialog',
  templateUrl: './login-complete-dialog.html',
  styleUrls: ['./login-complete-dialog.scss'],
})
export class LoginCompleteDialogComponent {

  constructor(private dialogRef: MatDialogRef<LoginCompleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose() {
    this.dialogRef.close();
  }
}

