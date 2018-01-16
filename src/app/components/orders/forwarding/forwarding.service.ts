import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ApiErrorHandlerService } from '../../../services/api-error-handler.service';
import { StorageService } from '../../../services/storage.service';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../../../environments/environment';
import { Subject } from "rxjs/Subject";

const apiHost = environment.api;

@Injectable()
export class ForwardingService {
  component = new BehaviorSubject('');
  component$ = this.component.asObservable();
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();

  constructor(private http: HttpClient,
    private apiErrorHandleService: ApiErrorHandlerService,
    private storageService: StorageService) {
  }

  /**
   * Get Storage Order
   *
   * @returns {object}
   *
   */
  getStorageOrder() {
    return this.http.get(`${apiHost}/back/forwarding/storage`)
      .map(res => {
        const data: any = res;
        const order: any = data.forwardings;
        return order;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  /**
   * Get Wait Order
   *
   * @returns {object}
   *
   */
  getWaitOrder() {
    return this.http.get(`${apiHost}/back/forwarding/wait`)
      .map(res => {
        const data: any = res;
        const order: any = data.forwardings;
        return order;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  loadMoreWaitOrder(limit) {
    return this.http.post(`${apiHost}/back/forwarding/wait`, limit)
      .map(res => {
        const data: any = res;
        const order: any = data.forwardings;
        return order;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  loadMoreStorageOrder(limit) {
    return this.http.post(`${apiHost}/back/forwarding/wait`, limit)
      .map(res => {
        const data: any = res;
        const order: any = data.forwardings;
        return order;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  loadData(data) {
    this.component.next(data);
  }

}
