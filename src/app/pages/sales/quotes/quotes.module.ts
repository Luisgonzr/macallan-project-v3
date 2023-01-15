import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { QuoteTableViewComponent } from './quote-table-view/quote-table-view.component';
import { QuoteActionsComponent } from './quote-actions/quote-actions.component';


@NgModule({
  declarations: [
    QuoteCreateComponent,
    QuoteTableViewComponent,
    QuoteActionsComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
