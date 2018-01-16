import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

import {FlexLayoutModule} from '@angular/flex-layout';

import {Injector} from '@angular/core';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

let translations: any = {'CARDS_TITLE': 'This is a test'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

describe('FooterComponent', () => {
  let injector:  Injector;
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      providers: [
        TranslateService,
        TranslateStore,
        TranslateLoader,
        HttpClient,
        HttpHandler,
        {
          provide: TranslateLoader,
          useClass: (FakeLoader),
          deps: [HttpClient]
        }
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        }),
        FlexLayoutModule
      ]
    });
    injector = getTestBed();
    translate = injector.get(TranslateService);
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  }));

  it('should be created', () => {
    translate.use('en');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
