import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './services/guard.service';
import { CoreModule } from './services/core.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from "./components/services/services.component";
import { AffiliateProgramComponent } from "./components/affiliate-program/affiliate-program.component";
import { ShopsComponent } from "./components/shops/shops.component";
import { FaqComponent } from "./components/faq/faq.component";
import { RatesComponent } from "./components/rates/rates.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/main/main.module#MainModule'
  },
  {
    path: 'orders',
    canActivate: [ GuardService ],
    canActivateChild: [ GuardService ],
    loadChildren: './components/orders/orders.module#OrdersModule'
  },
  {
    path: 'profile',
    canActivate: [ GuardService ],
    loadChildren: './components/profile/profile.module#ProfileModule'
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: 'messages',
    canActivate: [ GuardService ],
    loadChildren: './components/messages/messages.module#MessagesModule'
  },
  {
    path: 'account',
    canActivate: [ GuardService ],
    loadChildren: './components/account/account.module#AccountModule'
  },
  {
    path: 'tracking',
    canActivate: [ GuardService ],
    loadChildren: './components/tracking/tracking.module#TrackingModule'
  },
  {
    path: 'contact',
    loadChildren: './components/contact/contact.module#ContactModule'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'affiliate_program',
    component: AffiliateProgramComponent
  },
  {
    path: 'shops',
    component: ShopsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'rates',
    component: RatesComponent
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CoreModule ],
  exports: [ RouterModule ],
  providers: [ GuardService ]
})

export class AppRoutingModule {
}
