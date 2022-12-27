import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RoleService } from '../../shared/services/role.service';

@Injectable({
  providedIn: 'root'
})
export class InsiderGuard implements CanActivate {
  constructor(
    private router: Router,
    private role: RoleService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.role.isIntegrator()) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
  }

}
