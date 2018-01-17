import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';

import {
  ContactActions,
  ContactActionTypes,
  GetContact,
  GetContactSuccess,
  GetContactError,
  AddContact,
  AddContactSuccess,
  AddContactError
} from './../actions/contact';

import { ContactService } from '../contact.service';
import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';

@Injectable()
export class ContactEffects {
  constructor( private actions$: Actions,
               private contactService: ContactService,
               private apiErrorHandleService: ApiErrorHandlerService) {
  }

  @Effect()
  getContacts$: Observable<Action> = this.actions$
    .ofType(ContactActionTypes.GetContact)
    .switchMap(action =>
      this.contactService.getThemes()
        .pipe(
          map(todos => new GetContactSuccess(todos)),
          catchError((e) => of(new GetContactError(e)))
        )
    );

    @Effect()
    addContact$: Observable<Action> = this.actions$
      .ofType(ContactActionTypes.AddContact)
      .map((action: AddContact) => action.payload)
      .mergeMap(todo =>
        this.contactService.sendMessage(todo)
          .pipe(
            map(() => new AddContactSuccess(todo)),
            catchError((e) => of(new AddContactError(e)))
          )
      );

}
