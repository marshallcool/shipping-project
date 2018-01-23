import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ApiErrorHandlerService } from '../../services/api-error-handler.service';
import { Wholesale, WholesaleMale, WholesaleFemale, WholesaleChildrens, WholesaleAll } from './models/wholesale';
const apiHost = environment.api;

@Injectable()
export class WholesaleService {

  constructor(private http: HttpClient,
              private apiErrorHandleService: ApiErrorHandlerService) { }

  getWholesaleMale() {
    return WholesaleMale;
  }

  getWholesaleFemale() {
    return WholesaleFemale;
  }

  getWholesaleChildrens() {
    return WholesaleChildrens;
  }

  getWholesaleAll() {
    return WholesaleAll;
  }

  getThemes(): Observable<any> {
    return this.http
      .get<any>(`${apiHost}/back/support/subjects`)
      .pipe(
        catchError((error) => {
          this.apiErrorHandleService.handle(error);
          return Observable.throw(error);
        })
      );
  }

}
