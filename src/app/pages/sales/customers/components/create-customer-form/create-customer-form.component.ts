import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppCatalogs } from 'src/app/config/catalogs';
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
    private readonly translate: TranslateService
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
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      regionCatId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      countryCatId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
    });
  }

  // Getters for customerCreateForm
  get nameCustomerCreateForm() { return this.customerCreateForm.get('name'); }
  get emailCustomerCreateForm() { return this.customerCreateForm.get('email'); }
  get usernameCustomerCreateForm() { return this.customerCreateForm.get('username'); }
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
    usernameCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    phoneCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    cityCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    regionCatIdCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    countryCatIdCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
  };

  createCustomer() {
    this.customerCreateFormDisable = true;
    const data = {
      name: this.customerCreateForm.get('name')!.value,
      email: this.customerCreateForm.get('email')!.value,
      username: this.customerCreateForm.get('username')!.value,
      phone: this.customerCreateForm.get('phone')!.value,
      city: this.customerCreateForm.get('city')!.value,
      regionCatId: this.customerCreateForm.get('regionCatId')!.value,
      countryCatId: this.customerCreateForm.get('countryCatId')!.value,
    };
    console.log(data);
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
