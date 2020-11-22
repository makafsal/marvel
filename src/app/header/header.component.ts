import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }


  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
