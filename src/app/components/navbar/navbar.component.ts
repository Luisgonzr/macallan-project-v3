import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from 'src/app/core/auth/session.service';
import { I18nService } from '../../shared/services/i18n.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userName!: string;
  @Input() userEmail!: string;

  constructor(
    private session: SessionService,
    private router: Router,
    private readonly i18Service: I18nService,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.useTranslate();
    this.i18Service.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })
  }

  useTranslate() {
    this.translate.use(this.i18Service.getLanguage());
  }


  logout(){
    this.session.removeItem('token');
    this.router.navigate(['/']);
  }

}
