import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ConfigurationModule } from './pages/configuration/configuration.module';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: "app",
    component: AppLayoutComponent,
    canActivate: [],//AuthGuard
    children: [
      {
        path: "home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: "sales", loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule)
      },
      {
        path: "configuration", loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule)
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
