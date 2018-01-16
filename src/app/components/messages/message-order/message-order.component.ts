import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-order',
  templateUrl: './message-order.component.html',
  styleUrls: ['./message-order.component.scss']
})
export class MessageOrderComponent implements OnInit {
  loading = false;
  messages: any;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getOrderMessages()
      .subscribe(messages => {
        this.messages = messages.messages;
        this.loading = false;
      });
  }

}
