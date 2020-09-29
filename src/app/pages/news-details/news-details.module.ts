import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details.component';
import { NewsDetailsRoutingModule } from './news-details.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule

  ]
})
export class NewsDetailsModule { }
