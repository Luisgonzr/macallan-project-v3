import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private readonly authService: AuthService
  ) { }

  isInsider() {
    if(this.authService.getUserType() !== 'INTEGRATOR'){
      return true;
    } else {
      return false;
    }
  }

  isIntegrator() {
    if(this.authService.getUserType() === 'INTEGRATOR'){
      return true;
    } else {
      return false;
    }
  }
}
