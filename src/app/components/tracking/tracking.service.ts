import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ApiErrorHandlerService } from '../../services/api-error-handler.service';

const apiHost = environment.api;

@Injectable()
export class TrackingService {
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();
  constructor(private http: HttpClient,
              private apiErrorHandleService: ApiErrorHandlerService) {}

  getTracking(track) {
    this.notify.next(false);
    return this.http.get(`${apiHost}/back/tracking/${track}`)
      .map(res => {
        this.notify.next(true);
        return (res as any).records;
      })
      .catch((e): any => {
        this.notify.next(true);
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }
}
