import { TestBed, async, ComponentFixture, getTestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LoaderBarComponent } from './shared/loader-bar/loader-bar.component';
import { NavComponent } from './components/nav/nav.component';

import {
  MatIconModule,
  MatDialogModule
} from '@angular/material';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import {
  RouterTestingModule
} from '@angular/router/testing';

import { LoaderService } from './shared/loader.service';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { LangService } from './services/lang.service';
import { NavService } from './components/nav/nav.service';
import { Observable } from 'rxjs/Observable';
import { Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let translations: any = {'CARDS_TITLE': 'This is a test'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

describe('AppComponent', () => {
  let injector:  Injector;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoaderBarComponent,
        NavComponent
      ],
      providers: [
        LoaderService,
        TranslateService,
        TranslateStore,
        TranslateLoader,
        AuthService,
        HttpClient,
        HttpHandler,
        StorageService,
        NavService,
        LangService,
        {
          provide: TranslateLoader,
          useClass: (FakeLoader),
          deps: [HttpClient]
        }
      ],
      imports: [ RouterTestingModule, BrowserAnimationsModule, MatIconModule, TranslateModule.forRoot({
        loader: {provide: TranslateLoader, useClass: FakeLoader},
      }), MatDialogModule, HttpClientModule ]
    });
    injector = getTestBed();
    translate = injector.get(TranslateService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', async(() => {
    translate.use('en');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

});
