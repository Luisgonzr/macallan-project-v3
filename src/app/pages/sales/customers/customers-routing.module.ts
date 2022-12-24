import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerActionsComponent } from './customer-actions/customer-actions.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerTableViewComponent } from './customer-table-view/customer-table-view.component';

const routes: Routes = [
  { path: "customer-table-view", component: CustomerTableViewComponent },
  { path: "customer-actions/:id", component: CustomerActionsComponent },
  { path: "customer-actions/:id/:selectedOption", component: CustomerActionsComponent },
  { path: "customer-create", component: CustomerCreateComponent },
  { path: "", redirectTo: "customer-table-view", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
