// import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../profile.service';
//
// @Component({
//   selector: 'app-history',
//   templateUrl: './history.component.html',
//   styleUrls: ['./history.component.scss']
// })
// export class HistoryComponent implements OnInit {
//
//   constructor(
//     private profileService: ProfileService
//   ) { }
//
//   ngOnInit() {
//     this.profileService.notifyOther({option: 'history', value: 'История платежей'});
//   }
//
// }

import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  displayedColumns = ['id', 'date', 'invoice', 'description', 'price', 'balance'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  id: number;
  date: string;
  invoice: string;
  description: string;
  price: string;
  balance: string;
}

const data: Element[] = [
  {id: 1, date: 'October 19, 2017 at 11:02 PM', invoice: 'IN142623', description: 'Penalty Storage', price: '1.00', balance: '100'},
  {id: 2, date: 'October 19, 2017 at 11:02 PM', invoice: 'IN142623', description: 'Penalty Storage', price: '1.00', balance: '100'},
  {id: 3, date: 'October 19, 2017 at 11:02 PM', invoice: 'IN142623', description: 'Penalty Storage', price: '1.00', balance: '100'},
  {id: 4, date: 'October 19, 2017 at 11:02 PM', invoice: 'IN142623', description: 'Penalty Storage', price: '1.00', balance: '100'},
  {id: 5, date: 'October 19, 2017 at 11:02 PM', invoice: 'IN142623', description: 'Penalty Storage', price: '1.00', balance: '100'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
