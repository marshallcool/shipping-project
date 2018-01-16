import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSnackBarModule,
  MatSortModule,
  MatButtonModule
} from '@angular/material';

import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { FooterModule } from '../footer/footer.module';
import { MessageForwardingComponent } from './message-forwarding/message-forwarding.component';
import { MessageOrderComponent } from './message-order/message-order.component';
import { MessageParcelsComponent } from './message-parcels/message-parcels.component';
import { MessageBillsComponent } from './message-bills/message-bills.component';
import { MessageAllComponent } from './message-all/message-all.component';
import { MessageTableComponent } from './message-table/message-table.component';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { TokenInterceptor } from '../../services/token.interceptor';
import { MessagesService } from './messages.service';
import { CoreModule } from '../../services/core.module';
import { MessagesPrivateComponent } from './messages-private/messages-private.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessagePageInputComponent } from './message-page/message-page-input/message-page-input.component';
import { SafeHtmlPipe } from '../../pipes/html.pipe';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatSnackBarModule,
    MatSortModule,
    CoreModule,
    HttpClientModule,
    MatButtonModule,
    FooterModule,
    FlexLayoutModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#f76451',
      secondaryColour: '#f76451',
      tertiaryColour: '#f76451'
    }),
  ],
  declarations: [
    MessagesComponent,
    MessageForwardingComponent,
    MessageOrderComponent,
    MessageParcelsComponent,
    MessageBillsComponent,
    MessageAllComponent,
    MessageTableComponent,
    MessagesPrivateComponent,
    MessagePageComponent,
    MessagePageInputComponent,
    SafeHtmlPipe
  ],
  providers: [
    MessagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class MessagesModule { }
