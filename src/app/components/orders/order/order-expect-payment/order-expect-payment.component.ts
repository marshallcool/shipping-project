import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OrderService } from './../order.service';
import { ForwardingService } from "../../forwarding/forwarding.service";

@Component({
  selector: 'app-order-expect-payment',
  templateUrl: './order-expect-payment.component.html',
  styleUrls: ['./order-expect-payment.component.scss']
})
export class OrderExpectPaymentComponent implements OnInit {
  subscriptions: Subscription[] = [];
  public parcels: any;
  parcel: any;
  component = 'order-expect-payment';
  offset = 1;
  limit = 5;

  constructor(
    private orderService: OrderService,
    private forwardingService: ForwardingService
  ) {
    this.forwardingService.component$
      .subscribe(value => {
        if (value === 'order-expect-payment') {
          this.offset += 1;
          this.orderService.getExpectPayment(this.offset, this.limit)
            .subscribe(x => {
              x.orders.map(item => {
                this.parcels.push(item);
              });
            });
        }
      });
  }

  public loading = false;

  ngOnInit() {
    this.loading = true;
    this.orderService.getExpectPayment(this.offset, this.limit)
      .subscribe(x => {
          this.loading = false;
          this.parcels = x.orders;
      });
  }

}

