import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyservicePage } from './buyservice.page';

const routes: Routes = [
  {
    path: '',
    component: BuyservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyservicePageRoutingModule {}
