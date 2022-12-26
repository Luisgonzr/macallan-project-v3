import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from '../../../../../shared/services/communication.service';

@Component({
  selector: 'app-customer-general-update-form',
  templateUrl: './customer-general-update-form.component.html',
  styleUrls: ['./customer-general-update-form.component.css']
})
export class CustomerGeneralUpdateFormComponent implements OnInit {

  customerGeneralUpdateForm!: FormGroup;
  @Input() customer!: any;
  subscription: any;
  //Catalogs
  // Constructor
  constructor(private fb: FormBuilder, private communicationService: CommunicationService) { }
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
  submitCustomerGeneralUpdateForm() { console.log(this.customerGeneralUpdateForm.value); }
  // Select assign value
  change(e: any) {
    const name = e.target.id;
    const value = e.target.value;
    switch (name) {
      default: break;
    }
  }


}
