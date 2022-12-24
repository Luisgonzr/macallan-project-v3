import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "alarm-monitoring", loadChildren: () => import('./alarm-monitoring/alarm-monitoring.module').then(m => m.AlarmMonitoringModule) },
  { path: "device-monitoring", loadChildren: () => import('./device-monitoring/device-monitoring.module').then(m => m.DeviceMonitoringModule) },
  { path: "maintenance-installation-and-others", loadChildren: () => import('./maintenance-installation-and-other/maintenance-installation-and-other-routing.module').then(m => m.MaintenanceInstallationAndOtherRoutingModule) },
  { path: "", redirectTo: "alarm-monitoring", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
