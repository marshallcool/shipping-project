import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BillingComponent } from './billing/billing.component';
import { AdressComponent } from './adress/adress.component';
import { CardsComponent } from './cards/cards.component';
import { HistoryComponent } from './history/history.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PasswordComponent } from './password/password.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonalInformationResolverService } from './personal-information/personal-information-resolver.service';
import { AdressUsaComponent } from './adress-usa/adress-usa.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { AdressAddComponent } from './adress/adress-add/adress-add.component';
import { EditAddressComponent } from './adress/edit-address/edit-address.component';
import { GuardProfileService } from './guard-profile.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
      {
        path: 'personal-info',
        component: PersonalInformationComponent,
        resolve: {personal: PersonalInformationResolverService}
      },
      {
        path: 'avatar',
        component: AvatarComponent
      },
      {
        path: 'billing',
        component: BillingComponent
      },
      {
        path: 'adress',
        component: AdressComponent,
        children: [
          {
            path: 'add',
            component: AdressAddComponent
          },
          {
            path: 'edit/:id',
            component: EditAddressComponent
          }
        ]
      },
      {
        path: 'address-usa',
        component: AdressUsaComponent,
        canActivate: [ GuardProfileService ],
      },
      {
        path: 'addfunds',
        component: AddFundsComponent,
        canActivate: [ GuardProfileService ],
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'password',
        component: PasswordComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
