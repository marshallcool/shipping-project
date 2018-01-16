import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { StorageService } from './storage.service';

import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

const apiHost = environment.api;

@Injectable()
export class AuthService {
  private user: User;
  public AuthSubject = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router,
  ) {
  }

  isAuth(): boolean {
    return !!this.storageService.get('token');
  }

  isPersonalAddress(): boolean {
    return !!this.storageService.get('personalAddress');
  }

  getAddress(): Observable<any> {
    return this.http.get(`${apiHost}/back/address/usa`)
      .map(res => {
        console.log(res)
        if (res) {
          this.storageService.set('personalAddress', (res as any).requestId);
        }
        return res;
      })
      // .catch((e): any => {
      //   this.apiErrorHandleService.handle(e);
      //   return Observable.throw(e);
      // });
  }

  signIn(user) {
    return this.http.post(`${apiHost}/back/user/login`, user)
      .map(res => {
        const userData = res;
        this.storageService.set('token', (userData as any).record.authToken);

        this.AuthSubject.next(true);
        return true;
      });
  }

  signOut() {
    this.storageService.clear('token');
    this.storageService.clear('personalAddress');
    this.AuthSubject.next(true);
    this.router.navigate(['']);
  }
}
