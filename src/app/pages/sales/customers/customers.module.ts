import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerTableViewComponent } from './customer-table-view/customer-table-view.component';
import { CustomerActionsComponent } from './customer-actions/customer-actions.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerFormComponent } from './components/create-customer-form/create-customer-form.component';
import { CustomerViewTableComponent } from './components/customer-view-table/customer-view-table.component';


@NgModule({
  declarations: [
    CustomerTableViewComponent,
    CustomerActionsComponent,
    CustomerCreateComponent,
    CreateCustomerFormComponent,
    CustomerViewTableComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
