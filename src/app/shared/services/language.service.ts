import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService) {

  }

  setLanguage() {
    const lang = localStorage.getItem('lang') || 'es-MX';
    this.translateService.use(lang);
  }

  selectLanguage(event: any | string) {
    if (typeof event === "string") {
      localStorage.setItem('lang', event);
      this.translateService.use(event);
    } else {
      localStorage.setItem('lang', event.target.value);
      this.translateService.use(event.target.value);
    }
  }
}
