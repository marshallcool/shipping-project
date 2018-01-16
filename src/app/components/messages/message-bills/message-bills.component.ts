import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-bills',
  templateUrl: './message-bills.component.html',
  styleUrls: ['./message-bills.component.scss']
})
export class MessageBillsComponent implements OnInit {
  loading = false;
  messages: any;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getBillsMessages()
      .subscribe(messages => {
        this.messages = messages.messages;
        this.loading = false;
      });
  }

}
