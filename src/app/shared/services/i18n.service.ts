import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  localeEvent = new Subject<string>();

  constructor(private translate: TranslateService, private lngService:LanguageService) { }

  changeLocale(locale: string | any){
    this.selectLanguage(locale);
    this.setLanguage();
    this.localeEvent.next(locale);
  }

  useTransalate(locale: string | any){
    this.lngService.selectLanguage(locale);
  }

  getLanguage(){
    const lang = localStorage.getItem('lang') || 'es-MX';
    return lang;
  }

  setLanguage() {
    const lang = localStorage.getItem('lang') || 'es-MX';
    this.translate.use(lang);
  }

  selectLanguage(event: any | string) {
    if (typeof event === "string") {
      localStorage.setItem('lang', event);
      this.translate.use(event);
    } else {
      localStorage.setItem('lang', event.target.value);
      this.translate.use(event.target.value);
    }
  }



}
