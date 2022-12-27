import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppCatalogs } from 'src/app/config/catalogs';
import { CommunicationService } from '../../../../../shared/services/communication.service';
import { TaxProfileService } from '../../../../../models/taxProfile/tax-profile.service';
import { CustomerService } from '../../../../../models/customer/customer.service';
import { ToastService } from '../../../../../shared/services/toast.service';
import { I18nService } from '../../../../../shared/services/i18n.service';
import { AlertMessages } from 'src/app/config/alertMesagges';

@Component({
  selector: 'app-tax-profile-update-form',
  templateUrl: './tax-profile-update-form.component.html',
  styleUrls: ['./tax-profile-update-form.component.css']
})
export class TaxProfileUpdateFormComponent implements OnInit {

  @Input() customer!: any;
  subscription: any;
  disableForm:boolean = false;

  taxProfileUpdateForm!: FormGroup;
  //Catalogs
  taxSystemCatalog = AppCatalogs.TAX_SYSTEM_CATALOGS;
  // Constructor
  constructor(
    private fb: FormBuilder,
    private communicationService: CommunicationService,
    private taxProfileService: TaxProfileService,
    private customerService: CustomerService,
    private toastService: ToastService,
    private i18nService: I18nService
    ) { }
  ngOnInit(): void {
    this.initTaxProfileUpdateForm()
    if(typeof this.customer !== 'undefined'){
      this.setTaxProfileUpdateForm();
    }
    this.subscription = this.communicationService.changeEmitted$.subscribe(data => {
      if (data.type === 'getCustomer') {
        this.customer = data.customer;
        this.setTaxProfileUpdateForm();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  initTaxProfileUpdateForm() {
    this.taxProfileUpdateForm = this.fb.group({
      taxId: ['', [Validators.minLength(12), Validators.maxLength(13),]],
      taxLegalName: ['', [Validators.minLength(1), Validators.maxLength(150),]],
      taxSystemCatId: ['', []],
      taxZipCode: ['', [Validators.minLength(5), Validators.maxLength(5), Validators.pattern(/^[0-9]*$/),]],
    });
  }
  setTaxProfileUpdateForm() {
    this.taxProfileUpdateForm.get('taxId')?.setValue(this.customer.taxProfile.taxId);
    this.taxProfileUpdateForm.get('taxLegalName')?.setValue(this.customer.taxProfile.taxLegalName);
    this.taxProfileUpdateForm.get('taxSystemCatId')?.setValue(this.customer.taxProfile.taxSystemCatId);
    this.taxProfileUpdateForm.get('taxZipCode')?.setValue(this.customer.taxProfile.taxZipCode);
  }
  // Getters
  get taxIdTaxProfileUpdateForm() { return this.taxProfileUpdateForm.get('taxId'); }
  get taxLegalNameTaxProfileUpdateForm() { return this.taxProfileUpdateForm.get('taxLegalName'); }
  get taxSystemCatIdTaxProfileUpdateForm() { return this.taxProfileUpdateForm.get('taxSystemCatId'); }
  get taxZipCodeTaxProfileUpdateForm() { return this.taxProfileUpdateForm.get('taxZipCode'); }
  public errorMessages = {
    taxProfileUpdateForm: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be longer' },
      { type: 'maxlength', message: 'This field must be shorter' },
      { type: 'pattern', message: 'This field must be a number' },
    ]
  }
  submitTaxProfileUpdateForm() {
    const message = this.i18nService.getMessage(AlertMessages.TAX_PROFILE);
    const messageCustomer = this.i18nService.getMessage(AlertMessages.CUSTOMER);
    if (this.taxProfileUpdateForm.valid) {
      this.disableForm = true;
      this.taxProfileService.updateTaxProfile(this.customer.id, this.taxProfileUpdateForm.value).then(
        (response: any) => {
          console.log(response);
          this.toastService.openSuccessToast(message['SUCCESS']['UPDATE'], ()=>{
            setTimeout(() => {
              this.customerService.getCustomer(this.customer.id).then(
                (response: any) => {

                  console.log(response);
                  this.communicationService.emitChange({ type: 'getCustomer', customer: response });
                  this.disableForm = false;
                  this.toastService.openSuccessToast(messageCustomer['SUCCESS']['READ_ONE'], ()=>{}, ()=>{});
                }
              ).catch(
                (error: any) => {
                  console.log(error);
                  this.disableForm = false;
                  this.toastService.openErrorToast(messageCustomer['ERROR']['READ_ONE'], ()=>{}, ()=>{});
                }
              );
            }, 1500);
          }, ()=>{});
        }
      ).catch(
        (error: any) => {
          console.log(error);
          this.disableForm = false;
          this.toastService.openErrorToast(message['ERROR']['UPDATE'], ()=>{}, ()=>{});
        }
      );
    }
   }
  // Select assign value
  change(e: any) {
    const name = e.target.id;
    const value = e.target.value;
    switch (name) {
      case 'taxSystemCatId': this.taxProfileUpdateForm.get('taxSystemCatId')?.setValue(value); break;
      default: break;
    }
  }


}
