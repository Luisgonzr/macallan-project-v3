import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInX } from 'ng-animate';
import { I18nService } from 'src/app/shared/services/i18n.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  animations: [
    trigger('flipInX', [transition('* => *', useAnimation(flipInX, {
      params: { timing: .8, delay: 0 }
    }))])
  ]
})
export class ForgotPasswordComponent implements OnInit {

  flipInX: any;

  constructor(
    private i18nService: I18nService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })
  }

  useTranslate() {
    console.log('forgot');
    console.log(this.i18nService.getLanguage());
    this.translate.use(this.i18nService.getLanguage());
  }


}
