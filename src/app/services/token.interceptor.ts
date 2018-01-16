import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { StorageService } from './storage.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.storageService.get('token');
    let authReq: any;

    if (authToken) {
      authReq = request.clone({
        setHeaders: {
          Authorization: authToken
        }
      });
    }

    return authToken ? next.handle(authReq) : next.handle(request);
  }
}
