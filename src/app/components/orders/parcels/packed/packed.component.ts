import { Component, OnInit } from '@angular/core';

import {Sort} from '@angular/material';

@Component({
  selector: 'app-packed',
  templateUrl: './packed.component.html',
  styleUrls: ['./packed.component.scss']
})
export class PackedComponent implements OnInit {
  parcels: any[] = [];
  sortedData: any;
  parcel: any;
  expandedHeight: string;
  collapsedHeight: string;

  constructor(
  ) {}

  selectParcel(item) {
    item.rename = !item.rename;
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngOnInit() {
    this.expandedHeight = '70px';
    this.collapsedHeight = '70px';
    this.parcels =  [
      {
        'object': '124AS32FD',
        'price': '20',
        'weight': '50',
        'date': '10.10.1994',
        'declaration': true,
        'status': 'упаковано',
        'pay': true,
        'id': 124234234,
        parcel: [
          {
            'object': '124AS32FD',
            'object_name': 'кросовки',
            'price': '20',
            'weight': '50',
            'date': '10.10.1994',
            'product_name': 'Е884686',
            'track': 'ULPOf45',
            'order': 'dfggh45'
          },
          {
            'object': '124AS32FD',
            'object_name': 'кросовки',
            'price': '20',
            'weight': '50',
            'date': '10.10.1994',
            'product_name': 'Е884686',
            'track': 'ULPOf45',
            'order': 'dfggh45'
          },
          {
            'object': '124AS32FD',
            'object_name': 'кросовки',
            'price': '20',
            'weight': '50',
            'date': '10.10.1994',
            'product_name': 'Е884686',
            'track': 'ULPOf45',
            'order': 'dfggh45'
          }
        ]
      },
      {
        'object': '2222',
        'name': 'adidas',
        'price': '200',
        'weight': '500',
        'date': '10.10.1930',
        'declaration': false,
        'status': 'в процессе упаковки',
        'pay': false,
        'id': 124234234,
        parcel: [
          {
            'object': '124AS32FD',
            'object_name': 'кросовки',
            'price': '20',
            'weight': '50',
            'date': '10.10.1994',
            'product_name': 'Е884686',
            'track': 'ULPOf45',
            'order': 'dfggh45'
          }
        ]
      },
      {
        'object': '2222',
        'name': 'puma',
        'price': '50',
        'weight': '10',
        'date': '10.23.1994',
        'declaration': true,
        'status': 'в процессе упаковки',
        'pay': true,
        'id': 124234234,
        parcel: [
          {
            'object': '124AS32FD',
            'object_name': 'кросовки',
            'price': '20',
            'weight': '50',
            'date': '10.10.1994',
            'product_name': 'Е884686',
            'track': 'ULPOf45',
            'order': 'dfggh45'
          }
        ]
      }
    ];
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
        case 'price': return this.compare(+a.price, +b.price, isAsc);
        case 'weight': return this.compare(+a.price, +b.price, isAsc);
        case 'date': return this.compare(a.date, b.date, isAsc);
        case 'declaration': return this.compare(a.declaration, b.declaration, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        case 'pay': return this.compare(a.pay, b.pay, isAsc);
        default: return 0;
      }
    });
    this.parcels = this.sortedData;
  }

}
