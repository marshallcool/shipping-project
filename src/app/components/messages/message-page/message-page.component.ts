import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss', '../messages.component.scss']
})
export class MessagePageComponent implements OnInit, OnDestroy {
  objectId: number;
  private sub: any;
  messages: any;

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.messages = [
      {
        id: 1,
        author: 'Roman',
        date: '7/10/10 23:59',
        message: '<p>Allah Akbar!!!</p><p>Allah Wow</p>'
      },
      {
        id: 2,
        author: 'Roman',
        date: '7/10/10 23:59',
        message: '<p>Allah Akbar!!!</p><p>Allah Wow</p>'
      }
    ];
    this.sub = this.route.params
      .subscribe(params => {
        this.objectId = params['id'];
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  backBtn() {
    this.location.back();
  }

}
