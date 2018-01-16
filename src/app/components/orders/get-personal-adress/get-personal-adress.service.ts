import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';
import { StorageService } from '../../../services/storage.service';

const apiHost = environment.api;

@Injectable()
export class GetPersonalAddressService {

  constructor(private http: HttpClient,
              private storageService: StorageService,
              private apiErrorHandleService: ApiErrorHandlerService) {
  }

  getAddress(): Observable<any> {
    return this.http.get(`${apiHost}/back/address/usa`)
      .map(res => {
        if (res) {
          this.storageService.set('personalAddress', (res as any).requestId);
        }
        return res;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

}
