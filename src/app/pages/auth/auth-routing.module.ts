import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/core/guards/no-auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [NoAuthGuard],
    component: LoginComponent
  },
  {
    path: "forgot-password",
    canActivate: [NoAuthGuard],
    component: ForgotPasswordComponent
  },
  {
    path: "restore-password",
    canActivate: [NoAuthGuard],
    component: RestorePasswordComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
