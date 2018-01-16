import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-in-stock',
  templateUrl: './order-in-stock.component.html',
  styleUrls: [ './order-in-stock.component.scss' ]
})
export class OrderInStockComponent implements OnInit {
  subscriptions: Subscription[] = [];
  public parcels: any;
  parcel: any;
  component = 'order-in-stock';
  sum = 10;

  constructor(private orderService: OrderService) {
  }

  public loading = false;

  ngOnInit() {
    this.loading = true;
    this.orderService.getInStock()
      .subscribe(x => {
        this.loading = false;
        this.parcels = x.orders;
      });
  }

}
