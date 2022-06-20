import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "plans", loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule) },
  { path: "users", loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: "", redirectTo: "plans", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
