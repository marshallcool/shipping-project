import { Component, OnInit } from '@angular/core';

import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-expect-receipt',
  templateUrl: './order-expect-receipt.component.html',
  styleUrls: [ './order-expect-receipt.component.scss' ]
})
export class OrderExpectReceiptComponent implements OnInit {
  public parcels: any;
  parcel: any;
  sortedData: any;
  component = 'order-expect-receipt';
  sum = 10;

  constructor(
    private orderService: OrderService
  ) {}

  public loading = false;

  ngOnInit() {
    this.loading = true;
    this.orderService.getExpectReceipt()
      .subscribe(x => {
          this.loading = false;
          this.parcels = (x as any).orders;
      });
  }

}

