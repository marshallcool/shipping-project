import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

import { OrderService } from './../../order.service';

@Component({
  selector: 'app-order-add-list',
  templateUrl: './order-add-list.component.html',
  styleUrls: ['./order-add-list.component.scss']
})
export class OrderAddListComponent implements OnInit, OnChanges {
  @Input() orders: any = [];
  @Input() orderData: any = [];

  @Output() deleteOrder = new EventEmitter<any>();
  @Output() saveOrders = new EventEmitter<any>();

  order: any = [];

  constructor(
    private orderService: OrderService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.orderData) {

    }
  }

  ngOnInit() {
  }

  deleteItem(order, ord, index) {
    let newArray = order.filter((item) => item.id !== ord.id);
    this.orderData = this.orderData.filter((item) => item.id !== ord.id);
    this.deleteOrder.emit(this.orderData);
    this.orders[index] = newArray;
  }

  payOrder(orders) {
    console.log(orders)
  }

  saveOrder(orders) {
    this.saveOrders.emit(orders);
  }

}
