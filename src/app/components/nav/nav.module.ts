import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatIconModule,
  MatDialogModule,
  MatSidenavModule,
  MatSnackBarModule
} from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { NavComponent } from './nav.component';
import { CoreModule } from '../../services/core.module';
import { SharedModule } from '../../services/shared';
import { NavService } from './nav.service';
import { GetPersonalAddressDialogComponent } from '../orders/get-personal-adress/get-personal-address-dialog/get-personal-address-dialog';
import { TokenInterceptor } from '../../services/token.interceptor';

const NAV_COMPONENTS = [
  NavComponent,
  GetPersonalAddressDialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule,
    TranslateModule.forChild({}),
    CoreModule,
    MatIconModule,
    MatDialogModule,
    SharedModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: NAV_COMPONENTS,
  declarations: NAV_COMPONENTS,
  entryComponents: [
    GetPersonalAddressDialogComponent,
  ],
  providers: [
    NavService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class NavModule {
}
