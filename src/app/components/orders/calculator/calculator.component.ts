import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { CalculatorService } from './calculator.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: [ './calculator.component.scss' ]
})
export class CalculatorComponent implements OnInit {
  public selectedData: string;
  delivery: any;
  country: any;
  public serviceDelivery: any;
  loading = false;

  calculateForm: FormGroup = this.fb.group(
    {
      country: [ '', Validators.required ],
      insurance: [ '' ],
      weight: [ '', Validators.required ]
    });

  constructor(private fb: FormBuilder,
              private calculatorService: CalculatorService,
              private snackBar: MatSnackBar) {
  }

  selectedIdx = 0;

  toogleActive(index, delivery) {
    this.selectedIdx = index;
    this.serviceDelivery = delivery;
  }

  handle() {
    this.loading = true;
    if (this.selectedData === undefined) {
      this.selectedData = this.country[0].code;
    }
    this.calculateForm.patchValue({
      country: this.selectedData
    });
    if (this.calculateForm.valid && this.calculateForm.value.country) {
      console.log(this.calculateForm.value)
      this.calculatorService.sendCalculate(this.calculateForm.value)
        .subscribe(
          x => {
            this.loading = false;
            this.delivery = (x as any).available_services;
            this.delivery = this.delivery.filter((item) => item.price !== false && item.price !== null);
            this.serviceDelivery = this.delivery[ 0 ];
          }, err => {
            this.loading = false;
          });
    } else {
      this.loading = false;
      this.snackBar.open('Не все поля заполненны', '', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        extraClasses: [ 'warning-bar' ],
        duration: 3000,
      });
    }
  }

  ngOnInit() {
    this.country = this.calculatorService.changeAddress();
    for (let i = 0; i < this.country.length; i++) {
      this.country[ i ].id = this.country[ i ].code;
      this.country[ i ].text = this.country[ i ].title;
    }
  }

  public changedData(e: any): void {
    this.selectedData = e.value;
  }

}
