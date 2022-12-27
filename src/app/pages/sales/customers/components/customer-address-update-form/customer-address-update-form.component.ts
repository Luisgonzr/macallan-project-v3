import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CommunicationService } from 'src/app/shared/services/communication.service';
import { I18nService } from 'src/app/shared/services/i18n.service';
import { AppCatalogs } from '../../../../../config/catalogs';

@Component({
  selector: 'app-customer-address-update-form',
  templateUrl: './customer-address-update-form.component.html',
  styleUrls: ['./customer-address-update-form.component.css']
})
export class CustomerAddressUpdateFormComponent implements OnInit {

  @Input() customer!: any;
  subscription: any;

  customerAddressUpdateForm!: FormGroup;
  //Catalogs
  regionCatalog = AppCatalogs.REGION_CATALOGS;
  // Constructor
  constructor(
    private fb: FormBuilder,
    private readonly i18Service: I18nService,
    private readonly translate: TranslateService,
    private communicationService: CommunicationService
    ) { }
    useTranslate() {
      this.translate.use(this.i18Service.getLanguage());
    }
  ngOnInit(): void {
    this.useTranslate();
    this.i18Service.localeEvent.subscribe({
      next: locale => { this.useTranslate(); }
    })
    this.initCustomerAddressUpdateForm();
    if(typeof this.customer !== 'undefined'){
      this.setCustomerAddressUpdateForm();
    }
    this.subscription = this.communicationService.changeEmitted$.subscribe(data => {
      if (data.type === 'getCustomer') {
        this.customer = data.customer;
        this.setCustomerAddressUpdateForm();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  initCustomerAddressUpdateForm() {
    this.customerAddressUpdateForm = this.fb.group({
      addressStreet: ['', [Validators.minLength(5), Validators.maxLength(250),]],
      addressExternalNumber: ['', [Validators.minLength(1), Validators.maxLength(10),]],
      addressInternalNumber: ['', [Validators.minLength(1), Validators.maxLength(10),]],
      neightborhood: ['', [Validators.minLength(3), Validators.maxLength(100),]],
      zipCode: ['', [Validators.minLength(5), Validators.maxLength(5), Validators.pattern(/^[0-9]*$/),]],
      regionCatId: ['', []],
      city: ['', [Validators.minLength(1), Validators.maxLength(60), Validators.pattern(/^[a-zA-Z\s]*$/),]],
    });
  }
  setCustomerAddressUpdateForm() {
    this.customerAddressUpdateForm.get('addressStreet')?.setValue(this.customer.addressStreet);
    this.customerAddressUpdateForm.get('addressExternalNumber')?.setValue(this.customer.addressExternalNumber);
    this.customerAddressUpdateForm.get('addressInternalNumber')?.setValue(this.customer.addressInternalNumber);
    this.customerAddressUpdateForm.get('neightborhood')?.setValue(this.customer.neightborhood);
    this.customerAddressUpdateForm.get('zipCode')?.setValue(this.customer.zipCode);
    this.customerAddressUpdateForm.get('regionCatId')?.setValue(this.customer.regionCatId);
    this.customerAddressUpdateForm.get('city')?.setValue(this.customer.city);
  }
  // Getters
  get addressStreetCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('addressStreet'); }
  get addressExternalNumberCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('addressExternalNumber'); }
  get addressInternalNumberCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('addressInternalNumber'); }
  get neightborhoodCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('neightborhood'); }
  get zipCodeCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('zipCode'); }
  get regionCatIdCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('regionCatId'); }
  get cityCustomerAddressUpdateForm() { return this.customerAddressUpdateForm.get('city'); }
  public errorMessages = {
    customerAddressUpdateForm: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field string must be longer' },
      { type: 'pattern', message: 'This field must be a number' },
    ]
  }
  submitCustomerAddressUpdateForm() {

    console.log(this.customerAddressUpdateForm.value);
  }
  // Select assign value
  change(e: any) {
    console.log(e.target.value);
    const name = e.target.id;
    const value = e.target.value;
    switch (name) {
      case 'regionCatId': this.customerAddressUpdateForm.get('regionCatId')?.setValue(value); break;
      default: break;
    }
  }


}
