import { Component, OnInit } from '@angular/core';

import {Sort} from '@angular/material';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  parcels: any[] = [];
  sortedData: any;
  parcel: any;
  expandedHeight: string;
  collapsedHeight: string;

  constructor(private orderService: OrderService
  ) {}

  selectParcel(item) {
    item.rename = !item.rename;
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngOnInit() {
    this.orderService.getParcelsSended()
      .subscribe(parcel => {
        this.parcels = (parcel as any).parcels;
        console.log(this.parcels)
        this.parcels.map(item => {
          if (item.forwardings.length <= 0) {
            item.forwardings = null;
          }
          if (item.orders.length <= 0) {
            item.orders = null;
          }
        });
      });
    this.expandedHeight = '70px';
    this.collapsedHeight = '70px';
    this.parcels.map(parcel => parcel.rename === false);
    this.sortedData = this.parcels;
  }

  sortData(sort: Sort) {
    const data = this.parcels.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'object': return this.compare(a.object, b.object, isAsc);
        case 'total_price': return this.compare(+a.total_price, +b.total_price, isAsc);
        case 'weight': return this.compare(+a.price, +b.price, isAsc);
        case 'created': return this.compare(a.created, b.created, isAsc);
        case 'declaration': return this.compare(a.declaration, b.declaration, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        case 'pay': return this.compare(a.pay, b.pay, isAsc);
        default: return 0;
      }
    });
    this.parcels = this.sortedData;
  }

}
