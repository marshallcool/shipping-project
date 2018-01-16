import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import * as R from 'ramda';

import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-pay',
  templateUrl: './order-pay.component.html',
  styleUrls: ['./order-pay.component.scss']
})
export class OrderPayComponent implements OnInit {
  parcelForm: FormGroup = this.fb.group(
    {
      order_name: [ '' ],
      link: [ ''],
      title: [ ''],
      quantity: '',
      article: [ ''],
      price: '',
      promo: '',
      sale: [ ''],
      total: [ '' ],
    });

  public loadData: any = [];
  order: any = [];
  orders: any = [];

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.orderService.order$
      .subscribe(x => {
        console.log(x)
        this.loadData = x;
        // this.orders = x;
        // const ageNameSort = R.sortWith([
        //   R.ascend(R.prop('link'))
        // ]);
        let copy = Object.assign([], this.loadData);
        console.log(copy)
        this.orders = R.groupWith((a, b) => (a as any).link === (b as any).link, copy);
        // console.log(this.orders)
      });
  }

  ngOnInit() {
  }

  deleteItem(order, ord, index) {
    // console.log(ord)f
    // this.orders[index] = [];
    let newArray = order.filter((item) => item.id !== ord.id);
    this.orders[index] = newArray;
    // this.loadData = this.orders;
    // this.orderService.test(this.orders);
    // this.orderService.deleteParcel(ord.id).subscribe(x => {
    //   return this.orderService.getParcel().subscribe(d => {
    //     this.order = d;
    //     const ageNameSort = R.sortWith([
    //       R.ascend(R.prop('link'))
    //     ]);
    //     this.orders = R.groupWith((a, b) => a.link === b.link, ageNameSort(this.order));
    //   });
    // });
  }

  payOrder(order) {
  }

  saveOrder() {
    console.log(this.orders)
  }

}
