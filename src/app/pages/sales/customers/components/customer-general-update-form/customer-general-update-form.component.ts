import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertMessages } from 'src/app/config/alertMesagges';
import { CommunicationService } from '../../../../../shared/services/communication.service';
import { I18nService } from '../../../../../shared/services/i18n.service';
import { CustomerService } from '../../../../../models/customer/customer.service';
import { ToastService } from '../../../../../shared/services/toast.service';

@Component({
  selector: 'app-customer-general-update-form',
  templateUrl: './customer-general-update-form.component.html',
  styleUrls: ['./customer-general-update-form.component.css']
})
export class CustomerGeneralUpdateFormComponent implements OnInit {

  customerGeneralUpdateForm!: FormGroup;
  @Input() customer!: any;
  subscription: any;
  disableForm:boolean = false;
  //Catalogs
  // Constructor
  constructor(
    private fb: FormBuilder,
    private communicationService: CommunicationService,
    private i18nService: I18nService,
    private customerService: CustomerService,
    private toastService:ToastService
    ) { }
  ngOnInit(): void {
    this.initCustomerGeneralUpdateForm()
    if(typeof this.customer !== 'undefined'){
      this.setCustomerGeneralUpdateForm();
    }
    this.subscription = this.communicationService.changeEmitted$.subscribe(data => {
      if (data.type === 'getCustomer') {
        this.customer = data.customer;
        this.setCustomerGeneralUpdateForm();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  initCustomerGeneralUpdateForm() {
    this.customerGeneralUpdateForm = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(60),]],
      userName: ['', [Validators.minLength(3), Validators.maxLength(60),]],
      phone: ['', [Validators.minLength(9), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/),]],
    });
  }
  setCustomerGeneralUpdateForm() {
    this.customerGeneralUpdateForm.get('name')?.setValue(this.customer.name);
    this.customerGeneralUpdateForm.get('userName')?.setValue(this.customer.userName);
    this.customerGeneralUpdateForm.get('phone')?.setValue(this.customer.phone);
  }
  // Getters
  get nameCustomerGeneralUpdateForm() { return this.customerGeneralUpdateForm.get('name'); }
  get userNameCustomerGeneralUpdateForm() { return this.customerGeneralUpdateForm.get('userName'); }
  get phoneCustomerGeneralUpdateForm() { return this.customerGeneralUpdateForm.get('phone'); }
  public errorMessages = {
    customerGeneralUpdateForm: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'This field must be longer' },
      { type: 'maxlength', message: 'This field must be shorter' },
      { type: 'pattern', message: 'This field must be a number' },
    ]
  }
  submitCustomerGeneralUpdateForm() {
    const message = this.i18nService.getMessage(AlertMessages.CUSTOMER);
    if(this.customerGeneralUpdateForm.valid){
      this.disableForm = true;
      this.customerService.updateCustomerGeneral(this.customer.id, this.customerGeneralUpdateForm.value).then(
        (response: any) => {
          console.log(response);
          this.toastService.openSuccessToast(message['SUCCESS']['UPDATE'], ()=>{
            setTimeout(() => {
              this.customerService.getCustomer(this.customer.id).then(
                (response: any) => {

                  console.log(response);
                  this.communicationService.emitChange({ type: 'getCustomer', customer: response });
                  this.disableForm = false;
                  this.toastService.openSuccessToast(message['SUCCESS']['READ_ONE'], ()=>{}, ()=>{});
                }
              ).catch(
                (error: any) => {
                  console.log(error);
                  this.disableForm = false;
                  this.toastService.openErrorToast(message['ERROR']['READ_ONE'], ()=>{}, ()=>{});
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
      default: break;
    }
  }


}
