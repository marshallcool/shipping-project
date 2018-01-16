import { Component, OnInit } from '@angular/core';

import { OrderService } from './../order.service';

import * as R from 'ramda';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: [ './order-add.component.scss' ]
})
export class OrderAddComponent implements OnInit {
  public order: any;
  public id: any;
  orderData: any = [];
  orders: any;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
  }

  onOrder(order: string) {
    this.orderData = [...this.orderData, order];
    this.orders = R.groupWith((a, b) => (a as any).link === (b as any).link, this.orderData);
  }

  deleteOrder(orders) {
    this.orderData = orders;
  }

  saveOrders(orders) {
    // console.log(orders[0])
    this.orderService.addParcel(orders[0])
      .subscribe(order => {
        console.log(order);
      });
  }

}

