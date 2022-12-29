import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { LazyLoadEvent } from 'primeng/api';
import { CustomerService } from '../../../../models/customer/customer.service';
import { NgPrimeTableHandlerService } from '../../../services/ng-prime-table-handler.service';

@Component({
  selector: 'app-customer-searcher',
  templateUrl: './customer-searcher.component.html',
  styleUrls: ['./customer-searcher.component.css']
})
export class CustomerSearcherComponent implements OnInit, AfterViewInit {

  @Input() searchText: string = "";
  @Output() selectedCustomer = new EventEmitter<any>();

  selectedProduct1: any;
  // Variables
  rows!: number;
  totalRecords!: number;
  loading: boolean = true;
  data: any;
  params: any;
  @ViewChild('input') input!: ElementRef;

  constructor(
    private customerService: CustomerService,
    private tableHandlerService: NgPrimeTableHandlerService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
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
    this.customerService.searchCustomersIntegrator(params).then((res: any) => {
      this.data = res.data;
      this.rows = res.per_page;
      this.totalRecords = res.total_rows;
      this.loading = false;
    });
  }


  lazyLoadTable(event: LazyLoadEvent) {
    const temporalParams = this.params;
    console.log('Temporal params',temporalParams);
    const params = this.tableHandlerService.getParamsForQuery(event, []);
    this.params = {
      ...temporalParams,
      ...params,
    };
    this.loading = true;
    console.log('Real params', this.params);
    this.getData(this.params);
  }

  editRecord(dataSingle: any) {
    // Edit code here
    console.log(dataSingle);
  }
  deleteRecord(dataSingle: any) {
    // Edit code here
    console.log(dataSingle);
  }

  onRowSelect(event: any) {
    this.selectedCustomer.emit(event.data);
  }

  onRowUnselect(event: any) {
    console.log(event.data);
  }


}
