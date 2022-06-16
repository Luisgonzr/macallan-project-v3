import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AppConstants } from '../../config/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  COPYRIGHT: string;
  componentContainerCss: string;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addClasses();
    this.initData();
  }

  ngOnDestroy(): void {
    this.removeClasses();
  }

  initData() {
    this.COPYRIGHT = AppConstants.SOFTWARE_COPYRIGHT;
  }

  addClasses() {
    this.renderer.addClass(document.body, 'bg-primary');
    let currentRoute: string = this.router.url;
    switch (currentRoute) {
      case '/':
        this.componentContainerCss = 'col-xl-5 col-lg-6 col-md-8 col-sm-11';
        break;
      case '/signin':
        this.componentContainerCss = 'col-xl-8 col-lg-9';
        break;
      case '/forgot-password':
        this.componentContainerCss = 'col-xl-5 col-lg-6 col-md-8 col-sm-11';
        break;
      default:
        this.componentContainerCss = 'col-xl-5 col-lg-6 col-md-8 col-sm-11';
        break;
    }
    this.router.events.subscribe((val) => {
      let currentRoute: string = this.router.url;
      switch (currentRoute) {
        case '/':
          this.componentContainerCss = 'col-xl-5 col-lg-6 col-md-8 col-sm-11';
          break;
        case '/signin':
          this.componentContainerCss = 'col-xl-8 col-lg-9';
          break;
        case '/forgot-password':
          this.componentContainerCss = 'col-xl-5 col-lg-6 col-md-8 col-sm-11';
          break;
        default:
          this.componentContainerCss = 'col-xl-5 col-lg-6 col-md-8 col-sm-11';
          break;
      }
    });
  }

  removeClasses() {
    this.renderer.removeClass(document.body, 'bg-primary');
  }

}
