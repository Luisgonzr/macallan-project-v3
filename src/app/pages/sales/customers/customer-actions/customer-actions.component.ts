import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../../models/customer/customer.service';
import { CommunicationService } from '../../../../shared/services/communication.service';

@Component({
  selector: 'app-customer-actions',
  templateUrl: './customer-actions.component.html',
  styleUrls: ['./customer-actions.component.css']
})
export class CustomerActionsComponent implements OnInit {

  selectedOption!: string;
  customerId!: string | null;
  customer!: any;
  subscription: any;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private communicationService: CommunicationService
  ) { }

  async ngOnInit() {
    const option = this.route.snapshot.paramMap.get('selectedOption')
    this.customerId = this.route.snapshot.paramMap.get('id')
    this.selectedOption = this.getSelectedOption(option);
    await this.getCustomer();
    this.subscription = this.communicationService.changeEmitted$.subscribe(data => {
      if (data.type === 'getCustomer') {
        this.customer = data.customer;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getCustomer() {
    this.customerService.getCustomer(this.customerId!).then(res => {
      this.customer = res;
      this.communicationService.emitChange({ type: 'getCustomer', customer: this.customer });
    }).catch(err => {
      console.log(err);
    });
  }

  getSelectedOption(selectedOption: string | null) {
    if (selectedOption == null) {
      return 'profile';
    }
    switch (selectedOption) {
      case 'profile':
        return 'profile';
      case 'alarmMonitoring':
        return 'alarmMonitoring';
      case 'billings':
        return 'billings';
      case 'invoices':
        return 'invoices';
      default:
        return 'profile';
    }
  }

  onSelectedOptionEvent($event: string) {
    this.selectedOption = this.getSelectedOption($event);
  }

}
