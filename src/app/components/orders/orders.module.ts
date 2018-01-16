import { TokenInterceptor } from './../../services/token.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomFormsModule } from 'ng2-validation';

import {
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSortModule,
  MatTooltipModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { Select2Module } from 'ng2-select2';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

// Service
import { GetPersonalAddressService } from './get-personal-adress/get-personal-adress.service';
import { OrderService } from './order/order.service';
import { AddParcelService } from './add-parcel/add-parcel.service';
import { ForwardingService } from './forwarding/forwarding.service';

// Components
import { GetPersonalAdressComponent } from './get-personal-adress/get-personal-adress.component';
import { SimpleTinyComponent } from './simple-tiny/simple-tiny.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { TableParcelComponent } from './table-parcel/table-parcel.component';
import { OrderComponent } from './order/order.component';
import { OrderPayComponent } from './order/order-pay/order-pay.component';
import { ForwardingExpectReceiptComponent } from './forwarding/forwarding-packed/forwarding-packed.component';
import { ForwardingInStockComponent } from './forwarding/forwarding-in-stock/forwarding-in-stock.component';
import { ForwardingAddComponent } from './forwarding/forwarding-add/forwarding-add.component';
import { ForwardingComponent } from './forwarding/forwarding.component';
import { OrderSendedComponent } from './order/order-sended/order-sended.component';
import { OrderInStockComponent } from './order/order-in-stock/order-in-stock.component';
import { OrderExpectReceiptComponent } from './order/order-expect-receipt/order-expect-receipt.component';
import { OrderExpectPaymentComponent } from './order/order-expect-payment/order-expect-payment.component';
import { TableComponent } from './table.component';
import { CalculatorModule } from './calculator/calculator.module';
import { TableParcelResolverService } from './table-parcel/table-parcel-resolver.service';
import { FooterModule } from '../footer/footer.module';
import { CoreModule } from '../../services/core.module';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { AssembleParcelComponent } from './parcels/assemble-parcel/assemble-parcel';
import { ParcelsComponent } from './parcels/parcels.component';
import { PackagingComponent } from './parcels/packaging/packaging.component';
import { PackedComponent } from './parcels/packed/packed.component';
import { SentComponent } from './parcels/sent/sent.component';

import {
  OverlayPanelModule,
  LightboxModule
} from 'primeng/primeng';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { OpenImageComponent } from './open-image/open-image.component';
import { OrderAddFormComponent } from './order/order-add/order-add-form/order-add-form.component';
import { OrderAddListComponent } from './order/order-add/order-add-list/order-add-list.component';

@NgModule({
  imports: [
    CommonModule,
    LightboxModule,
    CalculatorModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    OrdersRoutingModule,
    MatExpansionModule,
    InfiniteScrollModule,
    MatAutocompleteModule,
    Select2Module,
    MatTooltipModule,
    FlexLayoutModule,
    CustomFormsModule,
    HttpClientModule,
    LightboxModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    OverlayPanelModule,
    CoreModule,
    FooterModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#f76451',
      secondaryColour: '#f76451',
      tertiaryColour: '#f76451'
    }),
    TranslateModule.forChild({})
  ],
  declarations: [
    OrdersComponent,
    PackedComponent,
    SentComponent,
    PackagingComponent,
    AssembleParcelComponent,
    ForwardingInStockComponent,
    ForwardingExpectReceiptComponent,
    ParcelsComponent,
    GetPersonalAdressComponent,
    OrderPayComponent,
    SimpleTinyComponent,
    ForwardingAddComponent,
    AddParcelComponent,
    TableParcelComponent,
    TableComponent,
    OrderAddComponent,
    OrderComponent,
    ForwardingComponent,
    OrderExpectPaymentComponent,
    OrderExpectReceiptComponent,
    OrderInStockComponent,
    OrderSendedComponent,
    FilterPipe,
    OpenImageComponent,
    OrderAddFormComponent,
    OrderAddListComponent
  ],
  providers: [
    GetPersonalAddressService,
    OrderService,
    AddParcelService,
    ForwardingService,
    TableParcelResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    OpenImageComponent,
  ],
})
export class OrdersModule {
}
