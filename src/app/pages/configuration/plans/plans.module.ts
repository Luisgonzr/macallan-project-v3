import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansTableViewComponent } from './plans-table-view/plans-table-view.component';
import { PlanActionComponent } from './plan-action/plan-action.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';

import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CreatePlanFormComponent } from './components/create-plan-form/create-plan-form.component';
import { PlanViewTableComponent } from './components/plan-view-table/plan-view-table.component';

export function PlanHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/app/configuration/plan/', '.json');
}


@NgModule({
  declarations: [
    PlansTableViewComponent,
    PlanActionComponent,
    PlanCreateComponent,
    CreatePlanFormComponent,
    PlanViewTableComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    TableModule,
    TranslateModule.forChild({
      defaultLanguage: 'es-MX',
      loader: {
        provide: TranslateLoader,
        useFactory: PlanHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class PlansModule { }
