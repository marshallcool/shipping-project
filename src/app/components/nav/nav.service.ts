import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { MatIconRegistry } from '@angular/material';

import { environment } from '../../../environments/environment';
import { StorageService } from '../../services/storage.service';
import { ApiErrorHandlerService } from '../../services/api-error-handler.service';
import 'rxjs/add/observable/interval';

const apiHost = environment.api;

@Injectable()
export class NavService {
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              private storageService: StorageService,
              private apiErrorHandleService: ApiErrorHandlerService) {
    this.iconRegistry
      .addSvgIconSet(
        this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/sprite.svg')
      );
  }

  icons: any;

  getIcon() {
    return this.icons = [


      {name: 'border-air'},


      {name: 'border-car'},


      {name: 'border-customs'},


      {name: 'border-weig'},


      {name: 'fiol-balance'},


      {name: 'fiol-exit'},


      {name: 'fiol-korobka'},


      {name: 'fiol-profile'},


      {name: 'flag'},


      {name: 'orange-balance'},


      {name: 'orange-exit'},


      {name: 'orange-korobka'},


      {name: 'orange-profile'},


      {name: 'white-exit'},


      {name: 'white-profile'},


      {name: 'фиол круг для языков'},


      {name: 'фиолетовая лупа'},


      {name: 'фиолетовый вопрос'},


      {name: 'фиолетовый инфа'},


    ];
  }

  sendAddress(data): Observable<any> {
    return this.http.post(`${apiHost}/back/address/usa`, data)
      .map(res => {
        this.storageService.set('personalAddress', (res as any).requestId);
        return res;
      })
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

  getUnreadMessages() {
    Observable.interval(120000)
      .switchMap(() => this.http.get(`${apiHost}/back/message/unread`))
      .map((data) => console.log(data))
      .subscribe(x => console.log(x));
  }

  changeLang(lang): Observable<any> {
    return this.http.post(`${apiHost}/back/language`, {lang: lang})
      .catch((e): any => {
        this.apiErrorHandleService.handle(e);
        return Observable.throw(e);
      });
  }

}
