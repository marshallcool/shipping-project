import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatProgressBarModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule
} from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { CoreModule } from '../../services/core.module';
import { SharedModule } from '../../services/shared';
import { FooterModule } from '../footer/footer.module';
import { LoginCompleteDialogComponent } from './login-complete-dialog/login-complete-dialog';
import { TokenInterceptor } from '../../services/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSnackBarModule,
    FooterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    LoginComponent,
    LoginCompleteDialogComponent
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    LoginCompleteDialogComponent,
  ],
})
export class LoginModule { }
