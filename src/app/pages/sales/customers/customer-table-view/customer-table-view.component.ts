import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-table-view',
  templateUrl: './customer-table-view.component.html',
  styleUrls: ['./customer-table-view.component.css']
})
export class CustomerTableViewComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
