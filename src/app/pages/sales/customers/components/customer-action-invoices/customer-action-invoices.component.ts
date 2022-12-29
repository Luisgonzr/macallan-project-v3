import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-action-invoices',
  templateUrl: './customer-action-invoices.component.html',
  styleUrls: ['./customer-action-invoices.component.css']
})
export class CustomerActionInvoicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getOutput(event:any){
    console.log('Parent',event);
  }

}
