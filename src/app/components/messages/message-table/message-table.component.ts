import { Component, OnInit, Input } from '@angular/core';

import { Sort } from '@angular/material';

@Component({
  selector: 'app-message-table',
  templateUrl: './message-table.component.html',
  styleUrls: ['./message-table.component.scss', '../messages.component.scss']
})
export class MessageTableComponent implements OnInit {
  @Input() messages: any;
  @Input() sortedData: any;

  constructor() { }

  ngOnInit() {
    this.sortedData = this.messages;
  }

  sortData(sort: Sort) {
    const data = this.messages.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'object':
          return compare(a.object, b.object, isAsc);
        case 'author':
          return compare(a.author, b.author, isAsc);
        case 'message':
          return compare(a.message, b.message, isAsc);
        case 'date':
          return compare(a.date, b.date, isAsc);
        default:
          return 0;
      }
    });
    this.messages = this.sortedData;
  }

}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
