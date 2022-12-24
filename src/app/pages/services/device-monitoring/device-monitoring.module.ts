import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceMonitoringRoutingModule } from './device-monitoring-routing.module';
import { DeviceMonitoringTableViewComponent } from './device-monitoring-table-view/device-monitoring-table-view.component';
import { DeviceMonitoringCreateComponent } from './device-monitoring-create/device-monitoring-create.component';
import { DeviceMonitoringActionsComponent } from './device-monitoring-actions/device-monitoring-actions.component';


@NgModule({
  declarations: [
    DeviceMonitoringTableViewComponent,
    DeviceMonitoringCreateComponent,
    DeviceMonitoringActionsComponent
  ],
  imports: [
    CommonModule,
    DeviceMonitoringRoutingModule
  ]
})
export class DeviceMonitoringModule { }
