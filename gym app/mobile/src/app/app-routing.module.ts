import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cart-model',
    loadChildren: () => import('./cart-model/cart-model.module').then( m => m.CartModelPageModule)
  },
  {
    path: 'buyservice',
    loadChildren: () => import('./buyservice/buyservice.module').then( m => m.BuyservicePageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./promotions/promotions.module').then( m => m.PromotionsPageModule)
  },
  {
    path: 'news-blogs',
    loadChildren: () => import('./news-blogs/news-blogs.module').then( m => m.NewsBlogsPageModule)
  },
  {
    path: 'galleries',
    loadChildren: () => import('./galleries/galleries.module').then( m => m.GalleriesPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'our-team',
    loadChildren: () => import('./our-team/our-team.module').then( m => m.OurTeamPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'product-item',
    loadChildren: () => import('./product-item/product-item.module').then( m => m.ProductItemPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
