import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmMonitoringActionsComponent } from './alarm-monitoring-actions/alarm-monitoring-actions.component';
import { AlarmMonitoringTableViewComponent } from './alarm-monitoring-table-view/alarm-monitoring-table-view.component';
import { AlarmMonitoringCreateComponent } from './alarm-monitoring-create/alarm-monitoring-create.component';

const routes: Routes = [
  { path: "alarm-monitoring-table-view", component: AlarmMonitoringTableViewComponent },
  { path: "alarm-monitoring-actions", component: AlarmMonitoringActionsComponent },
  { path: "alarm-monitoring-create", component: AlarmMonitoringCreateComponent },
  { path: "", redirectTo: "alarm-monitoring-table-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmMonitoringRoutingModule { }
