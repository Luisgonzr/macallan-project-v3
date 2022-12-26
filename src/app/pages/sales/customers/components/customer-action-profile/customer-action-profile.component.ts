import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-action-profile',
  templateUrl: './customer-action-profile.component.html',
  styleUrls: ['./customer-action-profile.component.css']
})
export class CustomerActionProfileComponent implements OnInit {

  @Input() customer!: any;

  constructor() { }

  ngOnInit(): void {

  }

}
