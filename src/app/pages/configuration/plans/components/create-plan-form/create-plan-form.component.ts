import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PlanService } from 'src/app/models/plan/plan.service';
import { I18nService } from '../../../../../shared/services/i18n.service';


@Component({
  selector: 'app-create-plan-form',
  templateUrl: './create-plan-form.component.html',
  styleUrls: ['./create-plan-form.component.css']
})
export class CreatePlanFormComponent implements OnInit {

    // CUSTOMER FORM RELATED
    planCreateForm!: FormGroup;
    planCreateFormDisable!: boolean;

  constructor(
    private readonly planService: PlanService
  ) { }

  ngOnInit() {
    this.loadPlanCreateForm();
  }

  loadPlanCreateForm() {
    this.planCreateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      description: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999999999)]),
    });
  }
  // Getters for planCreateForm
  get namePlanCreateForm() { return this.planCreateForm.get('name'); }
  get descriptionPlanCreateForm() { return this.planCreateForm.get('description'); }
  get pricePlanCreateForm() { return this.planCreateForm.get('price'); }
  initGeneralData() {
    this.planCreateFormDisable = false;
  }
  public errorMessages = {
    namePlanCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    descriptionPlanCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    pricePlanCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'min', message: '.Min value message' }, { type: 'max', message: 'Max value message' },],
  };
  setPlanCreateValues() {
    this.planCreateForm.get('name')!.setValue('');
    this.planCreateForm.get('description')!.setValue('');
    this.planCreateForm.get('price')!.setValue('');
  };
  async createPlan() {
    this.planCreateFormDisable = true;
    const data = {
      name: this.planCreateForm.get('name')!.value,
      description: this.planCreateForm.get('description')!.value,
      price: this.planCreateForm.get('price')!.value,
    };
    try {
      await this.planService.createPlan(data);
      this.setPlanCreateValues();
      this.planCreateFormDisable = false;
    } catch (error) {
      console.log(error);
      this.planCreateFormDisable = false;
    }
  }

}
