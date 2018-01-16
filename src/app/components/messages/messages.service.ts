import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import * as R from 'ramda';

import { ApiErrorHandlerService } from '../../services/api-error-handler.service';
import { environment } from '../../../environments/environment';

const apiHost = environment.api;

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient,
              private apiErrorHandleService: ApiErrorHandlerService) {
  }

  getAllMessages(): Observable<any> {
    return this.http.get(`${apiHost}/back/message/all`)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getBillsMessages(): Observable<any> {
    return this.http.get(`${apiHost}/back/message/invoice`)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getForwardingMessages(): Observable<any> {
    return this.http.get(`${apiHost}/back/message/forwarding`)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getOrderMessages(): Observable<any> {
    return this.http.get(`${apiHost}/back/message/order`)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getParcelsMessages(): Observable<any> {
    return this.http.get(`${apiHost}/back/message/parcel`)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getPmMessages(): Observable<any> {
    return this.http.get(`${apiHost}/back/message/pm`)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = R.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
