import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    TopNavbarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    TopNavbarComponent
  ]
})
export class ShellModule { }
