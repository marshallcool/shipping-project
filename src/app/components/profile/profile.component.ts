import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

declare const jQuery: any;

import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterContentInit {
  private subscription: Subscription;
  title: string;
  constructor(private profileService: ProfileService) { }

  ngAfterContentInit() {
    $('.strip').click(function () {
      $(this).css('z-index', '110');
      $(this).toggleClass('strip-active');
      $(this).siblings().toggleClass('strip-hidden');
      $('p').toggleClass('p-active');
      $('.block-close').toggleClass('block-close-active');
    });
  }

  ngOnInit() {
    this.subscription = this.profileService.notifyObservable$.subscribe(res => {
      this.title = res.value;
    });
  }

}
