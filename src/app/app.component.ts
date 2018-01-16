import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-loader-bar></app-loader-bar>
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {
    // this.router.events
    //   .subscribe((res) => {
    //     if (res instanceof NavigationEnd) {
    //       window.scrollTo(0, 0);
    //     }
    //   });
  }

}
