import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholesaleComponent } from './wholesale.component';


const routes: Routes = [
  {
    path: '',
    component: WholesaleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleRoutingModule { }
