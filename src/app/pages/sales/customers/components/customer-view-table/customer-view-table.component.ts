import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { CustomerService } from 'src/app/models/customer/customer.service';
import { NgPrimeTableHandlerService } from 'src/app/shared/services/ng-prime-table-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-view-table',
  templateUrl: './customer-view-table.component.html',
  styleUrls: ['./customer-view-table.component.css']
})
export class CustomerViewTableComponent implements OnInit, AfterViewInit {

    // Variables
    rows!: number;
    totalRecords!: number;
    loading: boolean = true;
    data: any;
    params: any;
    @ViewChild('input') input!: ElementRef;

  constructor(
    private tableHandlerService: NgPrimeTableHandlerService,
    private customerService: CustomerService,
    private router: Router
  ) { }



  ngOnInit(): void {
  }

  ngAfterViewInit(){
    fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.loading = true;
      })
    )
    .subscribe(() => {
      const params = this.params;
      this.params = {
        ...params,
        search: this.input.nativeElement.value
      }
      this.params.page = 1;
      this.getData(this.params);
    }
    );
  }

  // Functions
  getData(params?: any) {
    if (typeof params === undefined) {
      params = {};
    }
    this.customerService.getCustomers(params).then((res: any) => {
      this.data = res.data;
      this.rows = res.per_page;
      this.totalRecords = res.total_rows;
      this.loading = false;
    });
  }


  lazyLoadTable(event: LazyLoadEvent) {
    const temporalParams = this.params;
    console.log(temporalParams);
    const params = this.tableHandlerService.getParamsForQuery(event, []);
    this.params = {
      ...temporalParams,
      ...params,
    };
    this.loading = true;
    this.getData(this.params);
  }

  editRecord(dataSingle: any) {
    // Edit code here
    console.log(dataSingle);
    this.router.navigate(['app/sales/customers/customer-actions', dataSingle.id]);
  }
  deleteRecord(dataSingle: any) {
    // Edit code here
    console.log(dataSingle);
  }

}
