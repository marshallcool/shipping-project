import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSnackBarModule
} from '@angular/material';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CalculatorModule } from '../orders/calculator/calculator.module';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../../services/shared';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    CalculatorModule,
    FooterModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
