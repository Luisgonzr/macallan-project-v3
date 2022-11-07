import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';

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

export function CustomerHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/app/sales/customer/', '.json');
}

@NgModule({
  declarations: [
    CustomerTableViewComponent,
    CustomerActionsComponent,
    CustomerCreateComponent,
    CreateCustomerFormComponent,
    CustomerViewTableComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
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
