import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanActionComponent } from './plan-action/plan-action.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';
import { PlansTableViewComponent } from './plans-table-view/plans-table-view.component';
import { InsiderGuard } from '../../../core/guards/insider.guard';

const routes: Routes = [
  { path: "plans-table-view", component: PlansTableViewComponent },
  { path: "plan-action", component: PlanActionComponent },
  { path: "plan-create", component: PlanCreateComponent },
  { path: "", redirectTo: "plans-table-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
