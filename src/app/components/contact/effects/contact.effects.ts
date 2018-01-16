import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_ERROR } from '../reducers/contact.reducer';

import { map, catchError } from 'rxjs/operators';

import { ContactService } from '../contact.service';
import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';

@Injectable()
export class ContactEffects {
  constructor( private actions$: Actions,
               private contactService: ContactService,
               private apiErrorHandleService: ApiErrorHandlerService) {
  }

  @Effect() getContacts$ = this.actions$
    .ofType(GET_CONTACTS)
    .switchMap(action =>
      this.contactService.getThemes()
        .pipe(
          map(todos => {
            return ({type: GET_CONTACTS_SUCCESS, payload: todos});
          }),
          catchError((e) => {
            this.apiErrorHandleService.handle(e);
            return Observable.throw(e);
          })
        )
    );
}
