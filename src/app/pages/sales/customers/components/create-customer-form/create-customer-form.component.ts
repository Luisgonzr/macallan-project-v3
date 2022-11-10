import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppCatalogs } from 'src/app/config/catalogs';
import { CustomerService } from 'src/app/models/customer/customer.service';
import { I18nService } from 'src/app/shared/services/i18n.service';

@Component({
  selector: 'app-create-customer-form',
  templateUrl: './create-customer-form.component.html',
  styleUrls: ['./create-customer-form.component.css']
})
export class CreateCustomerFormComponent implements OnInit {

  // CUSTOMER FORM RELATED
  customerCreateForm!: FormGroup;
  customerCreateFormDisable!: boolean;

  // CATALOGS
  regionCatalog!: any[];
  countryCatalog!: any[];



  constructor(
    private readonly i18Service: I18nService,
    private readonly translate: TranslateService,
    private readonly customerService: CustomerService
  ) {  }

  useTranslate() {
    console.log('plan');
    this.translate.use(this.i18Service.getLanguage());
  }

  ngOnInit(): void {
    this.initCatalogs();
    this.loadCustomerForm();
    this.initGeneralData();
    this.i18Service.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })

  }

  initCatalogs() {
    this.regionCatalog = AppCatalogs.REGION_CATALOGS;
    this.countryCatalog = AppCatalogs.COUNTRY_CATALOGS;
  }

  loadCustomerForm() {
    this.customerCreateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(1), Validators.maxLength(60)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      regionCatId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      countryCatId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
    });
  }

  // Getters for customerCreateForm
  get nameCustomerCreateForm() { return this.customerCreateForm.get('name'); }
  get emailCustomerCreateForm() { return this.customerCreateForm.get('email'); }
  get userNameCustomerCreateForm() { return this.customerCreateForm.get('userName'); }
  get phoneCustomerCreateForm() { return this.customerCreateForm.get('phone'); }
  get cityCustomerCreateForm() { return this.customerCreateForm.get('city'); }
  get regionCatIdCustomerCreateForm() { return this.customerCreateForm.get('regionCatId'); }
  get countryCatIdCustomerCreateForm() { return this.customerCreateForm.get('countryCatId'); }

  initGeneralData() {
    this.customerCreateFormDisable = false;
  }

  public errorMessages = {
    nameCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    emailCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'email', message: 'Email message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    userNameCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    phoneCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    cityCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    regionCatIdCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    countryCatIdCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
  };

  setPlanCreateValues() {
    this.customerCreateForm.get('name')!.setValue('');
    this.customerCreateForm.get('email')!.setValue('');
    this.customerCreateForm.get('userName')!.setValue('');
    this.customerCreateForm.get('phone')!.setValue('');
    this.customerCreateForm.get('city')!.setValue('');
    this.customerCreateForm.get('regionCatId')!.setValue('');
    this.customerCreateForm.get('countryCatId')!.setValue('');
  };

  async createCustomer() {
    this.customerCreateFormDisable = true;
    const data = {
      name: this.customerCreateForm.get('name')!.value as string,
      email: this.customerCreateForm.get('email')!.value as string,
      userName: this.customerCreateForm.get('userName')!.value as string,
      phone: this.customerCreateForm.get('phone')!.value as string,
      city: this.customerCreateForm.get('city')!.value as string,
      regionCatId: this.customerCreateForm.get('regionCatId')!.value as string,
      countryCatId: this.customerCreateForm.get('countryCatId')!.value as string,
    };
    try {
      await this.customerService.createCustomer(data);
      this.setPlanCreateValues();
      this.customerCreateFormDisable = false;
    } catch (error) {
      console.log(error);
      this.customerCreateFormDisable = false;
    }
  }

  change(e: any) {
    const name = e.target.id;
    const value = e.target.value;
    switch (name) {
      case 'customerCreateForm_regionCatId': this.customerCreateForm.get('regionCatId')!.setValue(value); break;
      case 'customerCreateForm_countryCatId': this.customerCreateForm.get('countryCatId')!.setValue(value); break;
      default:
        break;
    }
  }






}
