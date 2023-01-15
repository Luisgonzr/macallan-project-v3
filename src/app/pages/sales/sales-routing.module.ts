import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "customers", loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: "invoices", loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: "charges", loadChildren: () => import('./charges/charges.module').then(m => m.ChargesModule) },
  { path: "quotes", loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule) },
  { path: "", redirectTo: "customers", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
