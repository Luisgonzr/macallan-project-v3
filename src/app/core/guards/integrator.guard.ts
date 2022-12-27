import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../../shared/services/role.service';

@Injectable({
  providedIn: 'root'
})
export class IntegratorGuard implements CanActivate {
  constructor(
    private router: Router,
    private role: RoleService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.role.isInsider()) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
  }

}
