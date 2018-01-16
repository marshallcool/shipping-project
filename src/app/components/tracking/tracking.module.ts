import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import {
  MatProgressSpinnerModule,
  MatButtonModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';
import { FooterModule } from '../footer/footer.module';
import { TokenInterceptor } from '../../services/token.interceptor';
import { TrackingService } from "./tracking.service";
import { TrackingFormComponent } from './tracking-form/tracking-form.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TrackingRoutingModule,
    FooterModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [
    TrackingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  declarations: [TrackingComponent, TrackingFormComponent, TrackingListComponent]
})
export class TrackingModule { }
