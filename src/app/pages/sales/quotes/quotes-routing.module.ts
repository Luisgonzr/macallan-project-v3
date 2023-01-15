import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteActionsComponent } from './quote-actions/quote-actions.component';
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { QuoteTableViewComponent } from './quote-table-view/quote-table-view.component';

const routes: Routes = [
  { path: "quote-create/:customerId", component: QuoteCreateComponent },
  { path: "quote-table-view", component: QuoteTableViewComponent },
  { path: "quote-actions/:quoteId", component: QuoteActionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
