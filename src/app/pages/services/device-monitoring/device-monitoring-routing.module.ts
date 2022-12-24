import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceMonitoringTableViewComponent } from './device-monitoring-table-view/device-monitoring-table-view.component';
import { DeviceMonitoringCreateComponent } from './device-monitoring-create/device-monitoring-create.component';
import { DeviceMonitoringActionsComponent } from './device-monitoring-actions/device-monitoring-actions.component';

const routes: Routes = [
  { path: "deviceMonitoringTableView", component: DeviceMonitoringTableViewComponent },
  { path: "deviceMonitoringCreate", component: DeviceMonitoringCreateComponent },
  { path: "deviceMonitoringActions", component: DeviceMonitoringActionsComponent },
  { path: "", redirectTo: "deviceMonitoringTableView", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceMonitoringRoutingModule { }
