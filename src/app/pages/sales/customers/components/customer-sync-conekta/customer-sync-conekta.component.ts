import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../../../../shared/services/communication.service';
import { CustomerService } from '../../../../../models/customer/customer.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-customer-sync-conekta',
  templateUrl: './customer-sync-conekta.component.html',
  styleUrls: ['./customer-sync-conekta.component.css']
})
export class CustomerSyncConektaComponent implements OnInit {

  @Input() customer!: any;
  subscription: any;
  oxxoPaySyncButton: boolean = false;
  disableOxxoPaySyncButton: boolean = false;
  oxxoPay!: string;
  speiSyncButton: boolean = false;
  disableSpeiSyncButton: boolean = false;
  spei!: string;

  constructor(
    private communicationService: CommunicationService,
    private readonly customerService: CustomerService,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
    if(typeof this.customer !== 'undefined'){
      this.setConektaData();
    }
    this.subscription = this.communicationService.changeEmitted$.subscribe(data => {
      if (data.type === 'getCustomer') {
        this.customer = data.customer;
        console.log(this.customer);
        this.setConektaData();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  setConektaData() {
    if (this.customer.paymentMethodProfile.conektaOxxoReference != null) {
      this.oxxoPay = this.customer.paymentMethodProfile.conektaOxxoReference;
      this.oxxoPaySyncButton = false;
    }else{
      this.oxxoPaySyncButton = true;
    }
    if (this.customer.paymentMethodProfile.conektaSpeiAccount != null) {
      this.spei = this.customer.paymentMethodProfile.conektaSpeiAccount;
      this.speiSyncButton = false;
     } else {
      this.speiSyncButton = true;
     }
  }

  syncOxxoPay() {
    this.disableOxxoPaySyncButton = true;
    this.customerService.syncOxxoPay(this.customer.id)
    .then((response: any) => {
      console.log(response);
      this.toastService.openSuccessToast('Good 1', ()=>{
        setTimeout(() => {
          this.customerService.getCustomer(this.customer.id).then(
            (response: any) => {
              console.log(response);
              this.communicationService.emitChange({ type: 'getCustomer', customer: response });
              this.toastService.openSuccessToast('Good 2', ()=>{}, ()=>{});
            }
          ).catch(
            (error: any) => {
              console.log(error);
              this.toastService.openErrorToast('Bad', ()=>{}, ()=>{});
              this.disableOxxoPaySyncButton = false;
            }
          );
        }, 1500);
      }, ()=>{});
    })
    .catch((error: any) => {
      console.log(error);
      this.disableOxxoPaySyncButton = false;
      this.toastService.openErrorToast('Bad', ()=>{}, ()=>{});
    });
  }

  syncSpei() {
    this.disableSpeiSyncButton = true;
    this.customerService.syncSpei(this.customer.id)
    .then((response: any) => {
      console.log(response);
      this.toastService.openSuccessToast('Good 1', ()=>{
        setTimeout(() => {
          this.customerService.getCustomer(this.customer.id).then(
            (response: any) => {
              console.log(response);
              this.communicationService.emitChange({ type: 'getCustomer', customer: response });
              this.toastService.openSuccessToast('Good 2', ()=>{}, ()=>{});
            }
          ).catch(
            (error: any) => {
              console.log(error);
              this.toastService.openErrorToast('Bad', ()=>{}, ()=>{});
              this.disableSpeiSyncButton = false;
            }
          );
        }, 1500);
      }, ()=>{});
    })
    .catch((error: any) => {
      console.log(error);
      this.disableSpeiSyncButton = false;
      this.toastService.openErrorToast('Bad', ()=>{}, ()=>{});
    });
  }

}
