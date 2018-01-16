import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountChargesComponent } from './account-charges/account-charges.component';
import { AccountAvailableRemunerationComponent } from './account-available-remuneration/account-available-remuneration.component';
import { AccountPaymentsComponent } from './account-payments/account-payments.component';
import { AccountReferralsComponent } from './account-referrals/account-referrals.component';
import { AccountTransitionsComponent } from './account-transitions/account-transitions.component';
import { AccountBannersComponent } from './account-banners/account-banners.component';
import { AccountLinksComponent } from './account-links/account-links.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'charges', pathMatch: 'full' },
      {
        path: 'charges',
        component: AccountChargesComponent
      },
      {
        path: 'available_remuneration',
        component: AccountAvailableRemunerationComponent
      },
      {
        path: 'payments',
        component: AccountPaymentsComponent
      },
      {
        path: 'referrals',
        component: AccountReferralsComponent
      },
      {
        path: 'transitions',
        component: AccountTransitionsComponent
      },
      {
        path: 'banners',
        component: AccountBannersComponent
      },
      {
        path: 'links',
        component: AccountLinksComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
