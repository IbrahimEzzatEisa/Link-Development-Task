import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },


     {
      path: 'home',
      loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
    },

    {
      path: 'newsdetails',
      loadChildren: () => import('../pages/news-details/news-details.module').then(m => m.NewsDetailsModule),
    },

    {
      path: 'newslisting',
      loadChildren: () => import('../pages/news-listing/news-listing.module').then(m => m.NewsListingModule),
    },
  
  
 ]
   
}];

  
@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutesModule { }
