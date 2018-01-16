import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';
import { StorageService } from '../../../services/storage.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';

const apiHost = environment.api;

@Injectable()
export class AddParcelService {
  public parcel$ = new BehaviorSubject([]);
  parcels: any = [];

  constructor(private http: HttpClient,
              private apiErrorHandleService: ApiErrorHandlerService,
              private storageService: StorageService) {
    this.getParcel();
  }

  getParcel() {
    return this.parcel$.getValue();
  }

  /**
   * Add Parcel
   *
   * @returns {object}
   *
   */
  addParcel(data) {
    const authToken = this.storageService.get('token');
    const headers = new HttpHeaders().set('Authorization', authToken);

    return this.http.post(`${apiHost}/back/forwarding`, data, {headers: headers})
      .map(res => {
        this.parcels.push(res);
        this.parcel$.next(this.parcels);
        return this.parcels;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

}
