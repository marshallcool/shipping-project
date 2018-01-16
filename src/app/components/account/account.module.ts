import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { FooterModule } from '../footer/footer.module';
import { AccountChargesComponent } from './account-charges/account-charges.component';
import { AccountAvailableRemunerationComponent } from './account-available-remuneration/account-available-remuneration.component';
import { AccountPaymentsComponent } from './account-payments/account-payments.component';
import { AccountReferralsComponent } from './account-referrals/account-referrals.component';
import { AccountTransitionsComponent } from './account-transitions/account-transitions.component';
import { AccountBannersComponent } from './account-banners/account-banners.component';
import { AccountLinksComponent } from './account-links/account-links.component';

import { ChartModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FooterModule,
    FlexLayoutModule,
    ChartModule
  ],
  declarations: [ AccountComponent, AccountChargesComponent, AccountAvailableRemunerationComponent, AccountPaymentsComponent, AccountReferralsComponent, AccountTransitionsComponent, AccountBannersComponent, AccountLinksComponent ]
})
export class AccountModule {
}
