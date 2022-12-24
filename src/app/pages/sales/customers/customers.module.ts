import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerTableViewComponent } from './customer-table-view/customer-table-view.component';
import { CustomerActionsComponent } from './customer-actions/customer-actions.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerFormComponent } from './components/create-customer-form/create-customer-form.component';
import { CustomerViewTableComponent } from './components/customer-view-table/customer-view-table.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomerActionNavbarComponent } from './components/customer-action-navbar/customer-action-navbar.component';
import { CustomerActionProfileComponent } from './components/customer-action-profile/customer-action-profile.component';
import { CustomerActionAlarmMonitoringComponent } from './components/customer-action-alarm-monitoring/customer-action-alarm-monitoring.component';
import { CustomerActionBillingsComponent } from './components/customer-action-billings/customer-action-billings.component';
import { CustomerActionInvoicesComponent } from './components/customer-action-invoices/customer-action-invoices.component';

export function CustomerHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    CustomerTableViewComponent,
    CustomerActionsComponent,
    CustomerCreateComponent,
    CreateCustomerFormComponent,
    CustomerViewTableComponent,
    CustomerActionNavbarComponent,
    CustomerActionProfileComponent,
    CustomerActionAlarmMonitoringComponent,
    CustomerActionBillingsComponent,
    CustomerActionInvoicesComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    TableModule,
    TranslateModule.forChild({
      defaultLanguage: 'es-MX',
      loader: {
        provide: TranslateLoader,
        useFactory: CustomerHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class CustomersModule { }
