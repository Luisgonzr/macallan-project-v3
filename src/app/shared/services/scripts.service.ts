import { Injectable } from '@angular/core';
declare var $: any;
declare var bootstrap:any;

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }

  toggleSideNavigation() {
    $("#sidebarToggle").on("click", function (e:any) {
      e.preventDefault();
      $("body").toggleClass("sidenav-toggled");
    });
  }

  activateScrollSpy() {
    const stickyNav = document.body.querySelector('#stickyNav');
    if (stickyNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#stickyNav',
            offset: 82,
        });
    }
  }

  collapseResponsiveSidebar() {
    // Click to collapse responsive sidebar
    $("#layoutSidenav_content").click(function () {
      const BOOTSTRAP_LG_WIDTH = 992;
      if (window.innerWidth >= 992) {
        return;
      }
      if ($("body").hasClass("sidenav-toggled")) {
        $("body").toggleClass("sidenav-toggled");
      }
    });
  }


}
