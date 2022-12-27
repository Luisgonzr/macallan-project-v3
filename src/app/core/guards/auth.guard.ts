import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../auth/jwt.service';
import { SessionService } from '../auth/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private session: SessionService, private jwt: JwtService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.session.getItem('token');
      if (this.session.getItem('token')) {
        if(token === null){
          this.session.removeItem('token');
          this.router.navigate(['/']);
          return false;
        }
        if (this.jwt.isExpired(token)) {
          this.session.removeItem('token');
          this.router.navigate(['/']);
          return false;
        }
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }

}
