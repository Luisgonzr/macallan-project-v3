import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersTableViewComponent } from './users-table-view/users-table-view.component';
import { UserActionComponent } from './user-action/user-action.component';
import { UserCreateComponent } from './user-create/user-create.component';


@NgModule({
  declarations: [
    UsersTableViewComponent,
    UserActionComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
