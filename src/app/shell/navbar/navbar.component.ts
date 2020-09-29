import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // sidebar default val
  sidebar: boolean = false;

  // open sidebar default val
  bar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  //// open sidebar 
  open() {
    this.sidebar = true;
    this.bar = false;

}
// close sidebar
close() {
    this.sidebar = false;
    this.bar = true;
}
o(){
  alert('sss')
}
}
