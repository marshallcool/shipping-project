import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForwardingExpectReceiptComponent } from './forwarding/forwarding-packed/forwarding-packed.component';
import { ForwardingInStockComponent } from './forwarding/forwarding-in-stock/forwarding-in-stock.component';
import { ForwardingAddComponent } from './forwarding/forwarding-add/forwarding-add.component';
import { OrderSendedComponent } from './order/order-sended/order-sended.component';
import { OrderExpectPaymentComponent } from './order/order-expect-payment/order-expect-payment.component';
import { OrderInStockComponent } from './order/order-in-stock/order-in-stock.component';
import { OrderExpectReceiptComponent } from './order/order-expect-receipt/order-expect-receipt.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders.component';
import { ForwardingComponent } from './forwarding/forwarding.component';
import { TableParcelResolverService } from './table-parcel/table-parcel-resolver.service';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { AssembleParcelComponent } from './parcels/assemble-parcel/assemble-parcel';
import { ParcelsComponent } from './parcels/parcels.component';
import { PackagingComponent } from './parcels/packaging/packaging.component';
import { PackedComponent } from './parcels/packed/packed.component';
import { SentComponent } from './parcels/sent/sent.component';

const routes: Routes = [
  {
    path: '', component: OrdersComponent,
    children: [
      {path: '', redirectTo: 'forwarding', pathMatch: 'full'},
      {
        path: 'forwarding', component: ForwardingComponent,
        children: [
          {path: '', redirectTo: 'add', pathMatch: 'full'},
          {
            path: 'add',
            component: ForwardingAddComponent,
            resolve: {parcels: TableParcelResolverService}
          },
          {path: 'expect-receipt', component: ForwardingExpectReceiptComponent},
          {path: 'in-stock', component: ForwardingInStockComponent}
        ]
      },
      {
        path: 'order', component: OrderComponent,
        children: [
          {path: '', redirectTo: 'add', pathMatch: 'full'},
          {path: 'add', component: OrderAddComponent},
          {path: 'expect-receipt', component: OrderExpectReceiptComponent},
          {path: 'in-stock', component: OrderInStockComponent},
          {path: 'expect-payment', component: OrderExpectPaymentComponent},
          {path: 'sended', component: OrderSendedComponent}
        ]
      },
      {
        path: 'parcels', component: ParcelsComponent,
        children: [
          { path: '', redirectTo: 'assemble-parcel', pathMatch: 'full' },
          { path: 'assemble-parcel', component: AssembleParcelComponent },
          { path: 'packaging', component: PackagingComponent },
          { path: 'packed', component: PackedComponent },
          { path: 'sent', component: SentComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OrdersRoutingModule {
}
