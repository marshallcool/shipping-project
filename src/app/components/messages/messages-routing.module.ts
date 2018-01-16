import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { MessageForwardingComponent } from './message-forwarding/message-forwarding.component';
import { MessageOrderComponent } from './message-order/message-order.component';
import { MessageParcelsComponent } from './message-parcels/message-parcels.component';
import { MessageBillsComponent } from './message-bills/message-bills.component';
import { MessageAllComponent } from './message-all/message-all.component';
import { MessagesPrivateComponent } from './messages-private/messages-private.component';
import { MessagePageComponent } from './message-page/message-page.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: MessageAllComponent },
      { path: 'forwarding', component: MessageForwardingComponent },
      { path: 'order', component: MessageOrderComponent },
      { path: 'parcels', component: MessageParcelsComponent },
      { path: 'bills', component: MessageBillsComponent },
      { path: 'private', component: MessagesPrivateComponent }
    ]
  },
  { path: 'message/:id', component: MessagePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
