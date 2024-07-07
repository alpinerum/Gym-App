import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleriesPageRoutingModule } from './galleries-routing.module';

import { GalleriesPage } from './galleries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleriesPageRoutingModule
  ],
  declarations: [GalleriesPage]
})
export class GalleriesPageModule {}
