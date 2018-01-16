import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './services/guard.service';
import { CoreModule } from './services/core.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CoreModule ],
  exports: [ RouterModule ],
  providers: [ GuardService ]
})

export class AppRoutingModule {
}
