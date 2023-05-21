import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  topBarHidden = false;
  scrollTimeout: any;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollTimeout = setTimeout(() => {
      this.topBarHidden = window.pageYOffset > 250;
    }, 100);
  }
  constructor() {}

  ngOnInit(): void {}
}
