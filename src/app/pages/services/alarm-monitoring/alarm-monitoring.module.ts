import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmMonitoringRoutingModule } from './alarm-monitoring-routing.module';
import { AlarmMonitoringTableViewComponent } from './alarm-monitoring-table-view/alarm-monitoring-table-view.component';
import { AlarmMonitoringCreateComponent } from './alarm-monitoring-create/alarm-monitoring-create.component';
import { AlarmMonitoringActionsComponent } from './alarm-monitoring-actions/alarm-monitoring-actions.component';


@NgModule({
  declarations: [
    AlarmMonitoringTableViewComponent,
    AlarmMonitoringCreateComponent,
    AlarmMonitoringActionsComponent
  ],
  imports: [
    CommonModule,
    AlarmMonitoringRoutingModule
  ]
})
export class AlarmMonitoringModule { }
