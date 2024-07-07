import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsBlogsPage } from './news-blogs.page';

const routes: Routes = [
  {
    path: '',
    component: NewsBlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsBlogsPageRoutingModule {}
