import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ApiErrorHandlerService } from '../../services/api-error-handler.service';
import { Contact, Themes } from './models/contact';

const apiHost = environment.api;

@Injectable()
export class ContactService {

  constructor(private http: HttpClient,
              private apiErrorHandleService: ApiErrorHandlerService) { }

  getThemes(): Observable<Themes[]> {
    return this.http
      .get<Themes[]>(`${apiHost}/back/support/subjects`)
        .pipe(
          catchError((error) => {
              this.apiErrorHandleService.handle(error);
              return Observable.throw(error);
            })
        );
  }

  sendMessage(data): Observable<Contact> {
    return this.http
      .post<Contact>(`${apiHost}/back/support/send`, data)
        .pipe(
          catchError((error) => {
              this.apiErrorHandleService.handle(error);
              return Observable.throw(error);
            })
        );
  }

}
