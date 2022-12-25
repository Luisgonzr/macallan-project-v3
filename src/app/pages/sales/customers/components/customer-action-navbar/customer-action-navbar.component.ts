import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-customer-action-navbar',
  templateUrl: './customer-action-navbar.component.html',
  styleUrls: ['./customer-action-navbar.component.css']
})
export class CustomerActionNavbarComponent implements OnInit {

  @Input() selectedOption: string = 'profile';
  @Output() selectedOptionEvent = new EventEmitter<string>();

  constructor(
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

  onSelectedOptionChange(selectedOption: string) {
    this.selectedOption = selectedOption;
    this.selectedOptionEvent.emit(this.selectedOption);
  }

}
