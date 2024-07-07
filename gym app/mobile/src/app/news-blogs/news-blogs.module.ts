import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsBlogsPageRoutingModule } from './news-blogs-routing.module';

import { NewsBlogsPage } from './news-blogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsBlogsPageRoutingModule
  ],
  declarations: [NewsBlogsPage]
})
export class NewsBlogsPageModule {}
