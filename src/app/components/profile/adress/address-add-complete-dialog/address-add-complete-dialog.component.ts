import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-order-complete-dialog',
  templateUrl: './address-add-complete-dialog.component.html',
  styleUrls: ['./address-add-complete-dialog.component.scss'],
})
export class AddAddressCompleteDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddAddressCompleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose() {
    this.dialogRef.close();
  }
}

