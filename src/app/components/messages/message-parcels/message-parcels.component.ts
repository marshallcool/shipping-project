import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-parcels',
  templateUrl: './message-parcels.component.html',
  styleUrls: ['./message-parcels.component.scss']
})
export class MessageParcelsComponent implements OnInit {
  loading = false;
  messages: any;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getParcelsMessages()
      .subscribe(messages => {
        this.messages = messages.messages;
        this.loading = false;
      });
  }

}
