import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-actions',
  templateUrl: './customer-actions.component.html',
  styleUrls: ['./customer-actions.component.css']
})
export class CustomerActionsComponent implements OnInit {

  selectedOption!: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const option = this.route.snapshot.paramMap.get('selectedOption')
    this.selectedOption = this.getSelectedOption(option);
    console.log(this.selectedOption);

  }

  getSelectedOption(selectedOption: string | null) {
    console.log("a",selectedOption);
    if(selectedOption == null) {
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
