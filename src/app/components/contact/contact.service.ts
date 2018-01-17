import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ApiErrorHandlerService } from '../../services/api-error-handler.service';
import { Contact } from './models/contact';

const apiHost = environment.api;

@Injectable()
export class ContactService {

  constructor(private http: HttpClient,
              private apiErrorHandleService: ApiErrorHandlerService) { }

  getThemes(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(`${apiHost}/back/message/all`)
        .pipe(
          catchError((error) => {
              this.apiErrorHandleService.handle(error);
              return Observable.throw(error);
            })
        );
  }

  sendMessage(data): Observable<Contact> {
    return this.http
      .post<Contact>(`${apiHost}/back/message/all`, data)
        .pipe(
          catchError((error) => {
              this.apiErrorHandleService.handle(error);
              return Observable.throw(error);
            })
        );
  }

}
