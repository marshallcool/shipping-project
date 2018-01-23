import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from './storage.service';
import { ApiErrorHandlerService } from './api-error-handler.service';
import { TokenInterceptor } from './token.interceptor';
import { SafeHtmlPipe } from '../pipes/html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StorageService,
    ApiErrorHandlerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  declarations: [SafeHtmlPipe],
  exports: [SafeHtmlPipe]
})
export class CoreModule { }
