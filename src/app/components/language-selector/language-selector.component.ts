import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { I18nService } from '../../shared/services/i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private i8nService: I18nService) { }

  ngOnInit(): void {
  }

  public selectLanguage(event: any){
    this.i8nService.changeLocale(event);
  }

}
