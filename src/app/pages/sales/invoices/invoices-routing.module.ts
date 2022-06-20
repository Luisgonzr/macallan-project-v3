import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceActionsComponent } from './invoice-actions/invoice-actions.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoicesTableViewComponent } from './invoices-table-view/invoices-table-view.component';

const routes: Routes = [
  { path: "invoices-table-view", component: InvoicesTableViewComponent },
  { path: "invoice-actions", component: InvoiceActionsComponent },
  { path: "invoice-create", component: InvoiceCreateComponent },
  { path: "", redirectTo: "invoices-table-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
