import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsiderGuard } from 'src/app/core/guards/insider.guard';

const routes: Routes = [
  { path: "plans", canActivate: [InsiderGuard], loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule) },
  { path: "users", loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: "", redirectTo: "plans", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
