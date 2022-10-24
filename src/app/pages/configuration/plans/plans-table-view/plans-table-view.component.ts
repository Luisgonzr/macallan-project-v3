import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PlanService } from 'src/app/models/plan/plan.service';
import { I18nService } from '../../../../shared/services/i18n.service';

@Component({
  selector: 'app-plans-table-view',
  templateUrl: './plans-table-view.component.html',
  styleUrls: ['./plans-table-view.component.css']
})
export class PlansTableViewComponent implements OnInit {

  // CUSTOMER FORM RELATED
  planCreateForm!: FormGroup;
  planCreateFormDisable!: boolean;


  display: boolean = false;

  constructor(
    private readonly planService: PlanService,
    private readonly i18Service: I18nService,
    private readonly translate: TranslateService
  ) {

  }

  async ngOnInit() {
    this.i18Service.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })
  }

  useTranslate() {
    console.log('plan');
    this.translate.use(this.i18Service.getLanguage());
  }

  async getPlans() {
    return await this.planService.getPlans();
  }

}
