import { Component, OnInit, style, state, animate, transition, trigger, OnDestroy } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader-bar',
  templateUrl: './loader-bar.component.html',
  styleUrls: ['./loader-bar.component.scss'],
  animations: [
    trigger('load', [
      state('none', style({
        transform: 'translateX(-100%)',
        opacity: 0,
      })),
      state('start', style({
        transform: 'translateX(-100%)',
        opacity: 1,
      })),
      state('in-progress', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('end', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('start => in-progress', animate('50000ms cubic-bezier(0,1.13,.32,.91)')),
      transition('* => end', animate('250ms ease-in')),
      transition('end => none', animate('100ms ease-in')),
    ]),
  ],
})
export class LoaderBarComponent implements OnInit, OnDestroy {

  loadTrigger = new BehaviorSubject<string>('none');
  triggerKey: string;
  subs: Subscription[] = [];

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.subs.push(this.loaderService.starts.subscribe(key => {
      this.triggerKey = key;
      if (this.loadTrigger.value !== 'start' && this.loadTrigger.value !== 'in-progress') {
        this.loadTrigger.next('start');
        setTimeout(() => {
          if (this.loadTrigger.value === 'start') {
            this.loadTrigger.next('in-progress');
          }
        }, 50);
      }
    }));

    this.subs.push(this.loaderService.ends.subscribe(key => {
      if (this.triggerKey === key) {
        this.loadTrigger.next('end');
        setTimeout(() => {
          this.loadTrigger.next('none');
        }, 150);
      }
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
