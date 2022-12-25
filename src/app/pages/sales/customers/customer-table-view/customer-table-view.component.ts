import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-customer-table-view',
  templateUrl: './customer-table-view.component.html',
  styleUrls: ['./customer-table-view.component.css']
})
export class CustomerTableViewComponent implements OnInit {

  display: boolean = false;

  constructor(
    private readonly i18Service: I18nService,
    private readonly translate: TranslateService
  ) {

  }

  async ngOnInit() {
    this.useTranslate();
    this.i18Service.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })
  }

  useTranslate() {
    this.translate.use(this.i18Service.getLanguage());
  }

}
