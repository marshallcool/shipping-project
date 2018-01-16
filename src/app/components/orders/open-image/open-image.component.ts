import { Component, OnInit, Inject } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-open-image',
  templateUrl: './open-image.component.html',
  styleUrls: ['./open-image.component.scss']
})
export class OpenImageComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<OpenImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
