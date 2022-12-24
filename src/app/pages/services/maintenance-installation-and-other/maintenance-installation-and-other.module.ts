import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceInstallationAndOtherRoutingModule } from './maintenance-installation-and-other-routing.module';
import { MaintenanceInstallationAndOtherTableViewComponent } from './maintenance-installation-and-other-table-view/maintenance-installation-and-other-table-view.component';
import { MaintenanceInstallationAndOtherCreateComponent } from './maintenance-installation-and-other-create/maintenance-installation-and-other-create.component';
import { MaintenanceInstallationAndOtherActionsComponent } from './maintenance-installation-and-other-actions/maintenance-installation-and-other-actions.component';


@NgModule({
  declarations: [
    MaintenanceInstallationAndOtherTableViewComponent,
    MaintenanceInstallationAndOtherCreateComponent,
    MaintenanceInstallationAndOtherActionsComponent
  ],
  imports: [
    CommonModule,
    MaintenanceInstallationAndOtherRoutingModule
  ]
})
export class MaintenanceInstallationAndOtherModule { }
