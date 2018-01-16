import { Component, OnInit } from '@angular/core';

import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-sended',
  templateUrl: './order-sended.component.html',
  styleUrls: ['./order-sended.component.scss']
})
export class OrderSendedComponent implements OnInit {
  public parcels: any;
  parcel: any;
  component = 'order-sended';
  sum = 10;

  constructor(
    private orderService: OrderService
  ) {}

  public loading = false;

  ngOnInit() {
    this.loading = true;
    this.orderService.getSended()
      .subscribe(x => {
        this.loading = false;
        this.parcels = (x as any).orders;
      });
  }

}

