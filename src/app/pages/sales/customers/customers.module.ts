import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerTableViewComponent } from './customer-table-view/customer-table-view.component';
import { CustomerActionsComponent } from './customer-actions/customer-actions.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';


@NgModule({
  declarations: [
    CustomerTableViewComponent,
    CustomerActionsComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
