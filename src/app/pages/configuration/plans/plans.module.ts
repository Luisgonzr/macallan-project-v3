import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansTableViewComponent } from './plans-table-view/plans-table-view.component';
import { PlanActionComponent } from './plan-action/plan-action.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';


@NgModule({
  declarations: [
    PlansTableViewComponent,
    PlanActionComponent,
    PlanCreateComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
