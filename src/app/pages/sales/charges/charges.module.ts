import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargesRoutingModule } from './charges-routing.module';
import { ChargesTableViewComponent } from './charges-table-view/charges-table-view.component';
import { ChargeActionsComponent } from './charge-actions/charge-actions.component';
import { ChargeCreateComponent } from './charge-create/charge-create.component';


@NgModule({
  declarations: [
    ChargesTableViewComponent,
    ChargeActionsComponent,
    ChargeCreateComponent
  ],
  imports: [
    CommonModule,
    ChargesRoutingModule
  ]
})
export class ChargesModule { }
