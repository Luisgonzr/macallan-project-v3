import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import {fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { PlanService } from 'src/app/models/plan/plan.service';
import { NgPrimeTableHandlerService } from 'src/app/shared/services/ng-prime-table-handler.service';


@Component({
  selector: 'app-plan-view-table',
  templateUrl: './plan-view-table.component.html',
  styleUrls: ['./plan-view-table.component.css']
})
export class PlanViewTableComponent implements OnInit, AfterViewInit {

  // Variables
  rows!: number;
  totalRecords!: number;
  loading: boolean = true;
  data: any;
  params: any;
  @ViewChild('input') input!: ElementRef;

  constructor(
    private planService: PlanService,
    private tableHandlerService: NgPrimeTableHandlerService
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
    this.planService.getPlans(params).then((res: any) => {
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
  }
  deleteRecord(dataSingle: any) {
    // Edit code here
    console.log(dataSingle);
  }


}
