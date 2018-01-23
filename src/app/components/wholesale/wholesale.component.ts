import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WholesaleService } from './wholesale.service';
import 'rxjs/add/observable/combineLatest';
import * as wholesaleAll from './actions/wholesale.all';
import * as wholesaleMale from './actions/wholesale.male';

@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.scss']
})
export class WholesaleComponent implements OnInit {
  wholesaleMale: any;
  wholesaleFemale: any;
  wholesaleChildrens: any;
  wholesaleAll: any;
  books$: Observable<any>;
  loading = true;

  constructor(private wholeService: WholesaleService,
              private store: Store<any>) {
    this.books$ = Observable.combineLatest(
      store.select('wholesale'),
      store.select('wholesaleAll'),
      (wholesale) => {
        this.loading = wholesale.wholesaleAll.loading;
        return wholesale.wholesaleAll.data.themes;
      }
    );
  }

  ngOnInit() {
    this.wholesaleMale = this.wholeService.getWholesaleMale();
    this.wholesaleFemale = this.wholeService.getWholesaleFemale();
    this.wholesaleChildrens = this.wholeService.getWholesaleChildrens();
    this.wholesaleAll = this.wholeService.getWholesaleAll();
    this.store.dispatch(new wholesaleAll.GetWholesaleAll());
  }

  handleChange(e) {
    if (e.index === 0) {
      this.store.dispatch(new wholesaleAll.GetWholesaleAll());
      this.books$ = Observable.combineLatest(
        this.store.select('wholesale'),
        this.store.select('wholesaleAll'),
        (wholesale) => {
          this.loading = wholesale.wholesaleAll.loading;
          return wholesale.wholesaleAll.data.themes;
        }
      );
    }
    if (e.index === 1) {
      this.store.dispatch(new wholesaleMale.GetWholesaleMale());
      this.books$ = Observable.combineLatest(
        this.store.select('wholesale'),
        this.store.select('wholesaleMale'),
        (wholesale) => {
          this.loading = wholesale.wholesaleMale.loading;
          return wholesale.wholesaleMale.data.themes;
        }
      );
    }
  }

}
