import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from './footer.component';

const UI_COMPONENTS = [
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule.forChild({}),
  ],
  declarations: UI_COMPONENTS,
  exports: UI_COMPONENTS,
  providers: [],
})
export class FooterModule {}
