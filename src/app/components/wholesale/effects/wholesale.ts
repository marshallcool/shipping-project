import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';

import {
  WholesaleAllActions,
  WholesaleAllActionTypes,
  GetWholesaleAll,
  GetWholesaleAllSuccess,
  GetWholesaleAllError
} from '../actions/wholesale.all';

import {
  WholesaleMaleActions,
  WholesaleMaleActionTypes,
  GetWholesaleMale,
  GetWholesaleMaleSuccess,
  GetWholesaleMaleError
} from '../actions/wholesale.male';

import { WholesaleService } from '../wholesale.service';
import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';

@Injectable()
export class WholesaleAllEffects {
  constructor( private actions$: Actions,
               private wholesaleService: WholesaleService,
               private apiErrorHandleService: ApiErrorHandlerService) {
  }

  @Effect()
  loadWholesaleAll$: Observable<Action> = this.actions$
    .ofType(WholesaleAllActionTypes.GetWholesaleAll)
    .switchMap(action =>
      this.wholesaleService.getThemes()
        .pipe(
          map(themes => new GetWholesaleAllSuccess(themes)),
          catchError((e) => of(new GetWholesaleAllError(e)))
        )
    );

  @Effect()
  loadWholesaleMale$: Observable<Action> = this.actions$
    .ofType(WholesaleMaleActionTypes.GetWholesaleMale)
    .switchMap(action =>
      this.wholesaleService.getThemes()
        .pipe(
          map(themes => new GetWholesaleMaleSuccess(themes)),
          catchError((e) => of(new GetWholesaleMaleError(e)))
        )
    );

}
