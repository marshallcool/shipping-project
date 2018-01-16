import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-all',
  templateUrl: './message-all.component.html',
  styleUrls: ['./message-all.component.scss', '../messages.component.scss']
})
export class MessageAllComponent implements OnInit {
  loading = false;
  messages: any;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getAllMessages()
      .subscribe(messages => {
        this.messages = messages.messages;
        this.allItems = messages.messages;
        this.setPage(1);
        this.loading = false;
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.messagesService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
