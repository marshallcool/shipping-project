import { Component, OnInit } from '@angular/core';

import * as R from 'ramda';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  magazines: any;
  magazine: any;
  search: any;

  constructor() { }

  ngOnInit() {
    this.magazines = [
      {
        id: 1,
        commission: 15,
        name: 'Adidas.com'
      },
      {
        id: 2,
        commission: 15,
        name: 'Apple.com'
      },
      {
        id: 3,
        commission: 10,
        name: 'Danier.com'
      },
      {
        id: 4,
        commission: 10,
        name: 'Bebe.com'
      }
    ];
    this.magazine = R.groupWith((a, b) => (a as any).commission === (b as any).commission, this.magazines);
    console.log(this.magazine)
  }

}
