import { NgModule } from '@angular/core';
import { NavModule } from './components/nav/nav.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardService } from './services/guard.service';
import { CoreModule } from './services/core.module';
import { LoaderBarComponent } from './shared/loader-bar/loader-bar.component';
import { LoaderService } from './shared/loader.service';
import { FooterModule } from './components/footer/footer.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contacts } from './components/contact/reducers/contact.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoaderBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FooterModule,
    RouterModule,
    NavModule,
    StoreModule.forRoot('contacts', contacts),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
    // OrdersModule
  ],
  providers: [GuardService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
