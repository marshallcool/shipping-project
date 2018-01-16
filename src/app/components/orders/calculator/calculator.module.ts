import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  MatProgressSpinnerModule
} from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { CustomFormsModule } from 'ng2-validation';

import { Select2Module } from 'ng2-select2';
import { CalculatorService } from './calculator.service';
import { CalculatorComponent } from './calculator.component';
import { CoreModule } from '../../../services/core.module';

const UI_COMPONENTS = [
  CalculatorComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    Select2Module,
    CustomFormsModule,
    MatProgressSpinnerModule,
    HttpModule,
    TranslateModule.forChild({})
  ],
  exports: UI_COMPONENTS,
  declarations: UI_COMPONENTS,
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
