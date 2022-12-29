import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSearcherComponent } from './components/customer-searcher/customer-searcher.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';




@NgModule({
  exports: [
    CustomerSearcherComponent
  ],
  declarations: [
    CustomerSearcherComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class SharedModule { }
