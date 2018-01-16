import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-private',
  templateUrl: './messages-private.component.html',
  styleUrls: ['./messages-private.component.scss']
})
export class MessagesPrivateComponent implements OnInit {
  loading = false;
  messages: any;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getPmMessages()
      .subscribe(messages => {
        this.messages = messages.messages;
        this.loading = false;
      });
  }

}
