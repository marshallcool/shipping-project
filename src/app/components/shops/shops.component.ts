import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem('token');
  }

}
