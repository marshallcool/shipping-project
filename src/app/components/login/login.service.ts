import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { StorageService } from '../../services/storage.service';
import { ApiErrorHandlerService } from '../../services/api-error-handler.service';

const apiHost = environment.api;

@Injectable()
export class LoginService {
  public token: string;
  public isAuth: boolean;

  private apiHost: string;

  constructor(
    private http: HttpClient,
    private strgSrvc: StorageService,
    private apiErrorHandleService: ApiErrorHandlerService
  ) {
    this.apiHost = environment.api;
    this.token = this.strgSrvc.get('token');
    this.isAuth = !!this.token;
  }

  register(user) {
    return this.http.post(`${apiHost}/back/user/register`, user)
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
    }
}
