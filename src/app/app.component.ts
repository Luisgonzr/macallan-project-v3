import { Component } from '@angular/core';
import { LanguageService } from './shared/services/language.service';
import { I18nService } from './shared/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'macallan-project-v3';
  constructor(private i18Service:I18nService) {
    this.i18Service.setLanguage();
  }

}
