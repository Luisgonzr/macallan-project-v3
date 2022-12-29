import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerActionsComponent } from './customer-actions/customer-actions.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerTableViewComponent } from './customer-table-view/customer-table-view.component';
import { AuthGuard } from '../../../core/guards/auth.guard';

const routes: Routes = [
  { path: "customer-table-view", component: CustomerTableViewComponent, canActivate: [AuthGuard] },
  { path: "customer-actions/:id", component: CustomerActionsComponent, canActivate: [AuthGuard] },
  { path: "customer-actions/:id/:selectedOption", component: CustomerActionsComponent, canActivate: [AuthGuard] },
  { path: "customer-create", component: CustomerCreateComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "customer-table-view", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
