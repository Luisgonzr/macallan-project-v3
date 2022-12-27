import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { AuthService } from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaxProfileService {

  ENDPOINT = 'tax-profile';
  INTEGRATOR_ENDPOINT = 'tax-profile/integrator';

  constructor(
    private readonly apiService: ApiService,
    private readonly authService: AuthService
  ) { }

  getEndpoint() {
    return this.authService.getUserType() === 'INTEGRATOR' ? this.INTEGRATOR_ENDPOINT : this.ENDPOINT;
  }

  updateTaxProfile(id: string, taxProfile: {taxSystemCatId: string, taxLegalName:string, taxZipCode:string, taxId:string}){
    return new Promise((resolve, reject) => {
      this.apiService.update(this.getEndpoint(), id, taxProfile).subscribe(
        {
          next: (response) => {
            resolve(response.data);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }


}
