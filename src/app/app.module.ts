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

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contacts } from './components/contact/reducers/contact.reducer';
import { reducers } from './components/wholesale/reducers/index';
import { ServicesComponent } from './components/services/services.component';
import { AffiliateProgramComponent } from './components/affiliate-program/affiliate-program.component';
import { ShopsComponent } from './components/shops/shops.component';
import { CalculatorModule } from './components/orders/calculator/calculator.module';
import { FaqComponent } from './components/faq/faq.component';
import { RatesComponent } from './components/rates/rates.component';

import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './pipes/highlight.pipe';
import { DeliveryMethodComponent } from './components/delivery-method/delivery-method.component';

import { reducer } from './reducers/index';
import { environment } from '../environments/environment';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [debug] : [];

@NgModule({
  declarations: [
    AppComponent,
    LoaderBarComponent,
    NotFoundComponent,
    ServicesComponent,
    AffiliateProgramComponent,
    ShopsComponent,
    FaqComponent,
    RatesComponent,
    HighlightPipe,
    DeliveryMethodComponent
  ],
  exports: [HighlightPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FooterModule,
    RouterModule,
    NavModule,
    FormsModule,
    StoreModule.forRoot(reducer, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    CalculatorModule,
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
