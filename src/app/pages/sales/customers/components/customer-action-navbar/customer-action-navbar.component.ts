import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-customer-action-navbar',
  templateUrl: './customer-action-navbar.component.html',
  styleUrls: ['./customer-action-navbar.component.css']
})
export class CustomerActionNavbarComponent implements OnInit {

  @Input() selectedOption: string = 'profile';
  @Output() selectedOptionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedOptionChange(selectedOption: string) {
    this.selectedOption = selectedOption;
    this.selectedOptionEvent.emit(this.selectedOption);
  }

}
