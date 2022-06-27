import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  // CUSTOMER
  customerEp = 'customer';
  customerData: any;
  // CUSTOMER FORM RELATED
  customerCreateForm!: FormGroup;
  customerCreateFormDisable!: boolean;
  // CATALOGS
  regionCatalog!: any[];
  countryCatalog!: any[];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.initCatalogs();
    this.loadCustomerForm();
    this.initGeneralData();
    //this.initCustomer();
  }
  initCatalogs() {
    this.regionCatalog = [{ id: 1, name: 'something', description: 'something again' }];
    this.countryCatalog = [{ id: 1, name: 'something', description: 'something again' }];
  }
  loadCustomerForm() {
    this.customerCreateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(1), Validators.maxLength(255)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
      region_cat_id: new FormControl('', [Validators.required, Validators.min(1), Validators.max(9999999999), Validators.minLength(1), Validators.maxLength(20)]),
      country_cat_id: new FormControl('', [Validators.required, Validators.min(1), Validators.max(9999999999), Validators.minLength(1), Validators.maxLength(20)]),
    });
  }
  // Getters for customerCreateForm
  get nameCustomerCreateForm() { return this.customerCreateForm.get('name'); }
  get emailCustomerCreateForm() { return this.customerCreateForm.get('email'); }
  get phoneCustomerCreateForm() { return this.customerCreateForm.get('phone'); }
  get cityCustomerCreateForm() { return this.customerCreateForm.get('city'); }
  get region_cat_idCustomerCreateForm() { return this.customerCreateForm.get('region_cat_id'); }
  get country_cat_idCustomerCreateForm() { return this.customerCreateForm.get('country_cat_id'); }
  initGeneralData() {
    this.customerCreateFormDisable = false;
  }
  public errorMessages = {
    nameCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    emailCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'email', message: 'Email message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    phoneCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    cityCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    region_cat_idCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'min', message: '.Min value message' }, { type: 'max', message: 'Max value message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
    country_cat_idCustomerCreateForm: [{ type: 'required', message: 'Required message' }, { type: 'min', message: '.Min value message' }, { type: 'max', message: 'Max value message' }, { type: 'minlength', message: 'Min length message' }, { type: 'maxlength', message: 'Max length message' },],
  };
  initCustomer() {
    const params = {
      // Get params here
    };
    this.api.list(this.customerEp, params).subscribe({
      next: (res) => {
        this.customerData = res.data.data;
        this.setCustomerCreateValues();
      },
      error: (err) => {
        console.error(err);
      }
    });
  };
  setCustomerCreateValues() {
    this.customerCreateForm.get('name')!.setValue(this.customerData.name);
    this.customerCreateForm.get('email')!.setValue(this.customerData.email);
    this.customerCreateForm.get('phone')!.setValue(this.customerData.phone);
    this.customerCreateForm.get('city')!.setValue(this.customerData.city);
    this.customerCreateForm.get('region_cat_id')!.setValue(this.customerData.region_cat_id);
    this.customerCreateForm.get('country_cat_id')!.setValue(this.customerData.country_cat_id);
  };
  createCustomer() {
    this.customerCreateFormDisable = true;
    const data = {
      name: this.customerCreateForm.get('name')!.value,
      email: this.customerCreateForm.get('email')!.value,
      phone: this.customerCreateForm.get('phone')!.value,
      city: this.customerCreateForm.get('city')!.value,
      region_cat_id: this.customerCreateForm.get('region_cat_id')!.value,
      country_cat_id: this.customerCreateForm.get('country_cat_id')!.value,
    };
    this.api.create(this.customerEp, data).subscribe({
      next: (res) => {
        if (res.status == 200) {
          alert('Async worked!');
          this.initCustomer();
          this.setCustomerCreateValues();
          this.customerCreateFormDisable = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.customerCreateFormDisable = false;
      }
    });
  }
  change(e: any) {
    const name = e.target.id;
    const value = e.target.value;
    switch (name) {
      case 'customerCreateForm_region_cat_id': this.customerCreateForm.get('region_cat_id')!.setValue(value); break;
      case 'customerCreateForm_country_cat_id': this.customerCreateForm.get('country_cat_id')!.setValue(value); break;
      default:
        break;
    }
  }


}
