import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrintInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
