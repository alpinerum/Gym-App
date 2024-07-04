import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyservicePageRoutingModule } from './buyservice-routing.module';

import { BuyservicePage } from './buyservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyservicePageRoutingModule
  ],
  declarations: [BuyservicePage]
})
export class BuyservicePageModule {}
