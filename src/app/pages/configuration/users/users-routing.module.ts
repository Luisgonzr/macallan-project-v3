import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActionComponent } from './user-action/user-action.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersTableViewComponent } from './users-table-view/users-table-view.component';

const routes: Routes = [
  { path: "users-table-view", component: UsersTableViewComponent },
  { path: "user-action", component: UserActionComponent },
  { path: "user-create", component: UserCreateComponent },
  { path: "", redirectTo: "users-table-view", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
