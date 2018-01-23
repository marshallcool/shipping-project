import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import {
  MatProgressSpinnerModule,
  MatButtonModule
} from '@angular/material';

import {
  TabViewModule
} from 'primeng/primeng';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TokenInterceptor } from '../../services/token.interceptor';
import { WholesaleComponent } from './wholesale.component';
import { WholesaleRoutingModule } from './wholesale-routing.module';

import { FooterModule } from '../footer/footer.module';
import { WholesaleService } from './wholesale.service';

import { reducers } from './reducers';
import { WholesaleAllEffects } from './effects/wholesale';
import { CoreModule } from '../../services/core.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FooterModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    CoreModule,
    WholesaleRoutingModule,
    TabViewModule,
    StoreModule.forFeature('wholesale', reducers),
    EffectsModule.forFeature([WholesaleAllEffects]),
  ],
  providers: [
    WholesaleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  declarations: [
    WholesaleComponent,
  ]
})
export class WholesaleModule {
}
