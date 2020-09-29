import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShellModule } from '../shell/shell.module';
import { PagesRoutesModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListingComponent } from './news-listing/news-listing.component';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ShellModule,
    RouterModule,

    PagesRoutesModule
  ]
})
export class PagesModule { }
