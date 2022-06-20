import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesTableViewComponent } from './invoices-table-view/invoices-table-view.component';
import { InvoiceActionsComponent } from './invoice-actions/invoice-actions.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';


@NgModule({
  declarations: [
    InvoicesTableViewComponent,
    InvoiceActionsComponent,
    InvoiceCreateComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
