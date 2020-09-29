import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListingComponent } from './news-listing.component';
import { NewsListingRoutingModule } from './news-listing.routing';

@NgModule({
  declarations: [
    NewsListingComponent
  ],
  imports: [
    CommonModule,
    NewsListingRoutingModule
  ]
})
export class NewsListingModule { }
