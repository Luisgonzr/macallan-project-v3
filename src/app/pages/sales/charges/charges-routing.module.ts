import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeActionsComponent } from './charge-actions/charge-actions.component';
import { ChargeCreateComponent } from './charge-create/charge-create.component';
import { ChargesTableViewComponent } from './charges-table-view/charges-table-view.component';

const routes: Routes = [
  { path: "charges-table-view", component: ChargesTableViewComponent },
  { path: "charge-actions", component: ChargeActionsComponent },
  { path: "charge-create", component: ChargeCreateComponent },
  { path: "", redirectTo: "charges-table-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargesRoutingModule { }
