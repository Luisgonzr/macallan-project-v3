import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceInstallationAndOtherCreateComponent } from './maintenance-installation-and-other-create/maintenance-installation-and-other-create.component';
import { MaintenanceInstallationAndOtherTableViewComponent } from './maintenance-installation-and-other-table-view/maintenance-installation-and-other-table-view.component';
import { MaintenanceInstallationAndOtherActionsComponent } from './maintenance-installation-and-other-actions/maintenance-installation-and-other-actions.component';

const routes: Routes = [
  { path: "MaintenanceInstallationAndOtherTableView", component: MaintenanceInstallationAndOtherTableViewComponent },
  { path: "MaintenanceInstallationAndOtherCreate", component: MaintenanceInstallationAndOtherCreateComponent },
  { path: "MaintenanceInstallationAndOtherActions", component: MaintenanceInstallationAndOtherActionsComponent },
  { path: "", redirectTo: "MaintenanceInstallationAndOtherTableView", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceInstallationAndOtherRoutingModule { }
