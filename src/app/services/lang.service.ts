import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';

const apiHost = environment.api;

@Injectable()
export class LangService {
  public notify = new BehaviorSubject('');
  public lang = new BehaviorSubject('');
  langObservable$ = this.lang.asObservable();

  constructor(private http: HttpClient,
              private storageService: StorageService) {}

  public notifyLang(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  changeLang(lang: any) {
    if (lang) {
      localStorage.setItem('lang', lang);
      this.lang.next(lang);
    }
  }

  setLang(lang: any) {
    return this.http.post(`${apiHost}/back/user/lang`, lang);
  }

  getCountry() {
    return this.http.get('https://ipinfo.io');
  }

}
