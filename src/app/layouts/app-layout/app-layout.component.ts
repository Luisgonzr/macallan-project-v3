import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptsService } from '../../shared/services/scripts.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  userName!: string;
  userEmail!: string;

  constructor(
    private scripts: ScriptsService,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getName();
    this.userEmail = this.authService.getEmail();
    this.scripts.toggleSideNavigation();
    this.scripts.activateScrollSpy();
    this.scripts.collapseResponsiveSidebar();
    this.addClasses();
  }

  ngOnDestroy(): void {
    this.removeClasses();
  }

  addClasses() {
    this.renderer.addClass(document.body, 'nav-fixed');
  }

  removeClasses() {
    this.renderer.removeClass(document.body, 'nav-fixed');
  }

}
