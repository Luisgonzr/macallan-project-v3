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
import { CustomerAddressUpdateFormComponent } from './components/customer-address-update-form/customer-address-update-form.component';
import { CustomerGeneralUpdateFormComponent } from './components/customer-general-update-form/customer-general-update-form.component';
import { TaxProfileUpdateFormComponent } from './components/tax-profile-update-form/tax-profile-update-form.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { CustomerSyncConektaComponent } from './components/customer-sync-conekta/customer-sync-conekta.component';

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
    CustomerActionInvoicesComponent,
    CustomerAddressUpdateFormComponent,
    CustomerGeneralUpdateFormComponent,
    TaxProfileUpdateFormComponent,
    CustomerSyncConektaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
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
