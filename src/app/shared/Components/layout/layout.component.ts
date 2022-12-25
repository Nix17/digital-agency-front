import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  constructor(
    private router: Router
  ) {}

  onNav(url: string) {
    let path: string[] = (url !== '' ? ['/', url] : [url]);
    // console.log(path);
    this.router.navigate(path);
  }
}
