import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  starts = new Subject<string>();
  ends = new Subject<string>();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.start('Router');
      }
      if (event instanceof NavigationEnd) {
        this.end('Router');
      }
    });
  }

  start(key: string) {
    this.starts.next(key);
  }

  end(key: string) {
    this.ends.next(key);
  }

}
