import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-forwarding',
  templateUrl: './message-forwarding.component.html',
  styleUrls: ['./message-forwarding.component.scss']
})
export class MessageForwardingComponent implements OnInit {
  loading = false;
  messages: any;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getForwardingMessages()
      .subscribe(messages => {
        this.messages = messages.messages;
        this.loading = false;
      });
  }

}
