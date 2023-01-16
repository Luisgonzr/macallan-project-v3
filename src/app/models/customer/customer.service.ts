import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { AuthService } from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  ENDPOINT = 'customer/insider';
  INTEGRATOR_ENDPOINT = 'customer/integrator';

  constructor(
    private readonly apiService: ApiService,
    private readonly authService: AuthService
  ) { }

  getEndpoint() {
    return this.authService.getUserType() === 'INTEGRATOR' ? this.INTEGRATOR_ENDPOINT : this.ENDPOINT;
  }

  getCustomers(params?: any) {
    return new Promise((resolve, reject) => {
      this.apiService.list(this.getEndpoint(), params).subscribe(
        {
          next: (response) => {
            resolve(response.data);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

  getCustomer(id: string) {
    return new Promise((resolve, reject) => {
      this.apiService.get(this.getEndpoint(), id).subscribe(
        {
          next: (response) => {
            resolve(response.data);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

  createCustomer(customer: { name: string, email: string, userName: string, phone: string, city: string, regionCatId: string, countryCatId: string }) {
    return new Promise((resolve, reject) => {
      this.apiService.create(this.getEndpoint(), customer).subscribe(
        {
          next: (response) => {
            resolve(response);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

  updateCustomerGeneral(id: string, customer: { name: string, userName: string, phone: string }) {
    return new Promise((resolve, reject) => {
      this.apiService.update(this.getEndpoint(), id, customer).subscribe(
        {
          next: (response) => {
            resolve(response);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

  updateCustomerAddress(
    id: string,
    customer: {
      city: string,
      regionCatId: string,
      addressStreet: string,
      addressExternalNumber: string,
      addressInternalNumber: string,
      neightborhood: string,
      zipCode: string,
    }
  ) {
    return new Promise((resolve, reject) => {
      this.apiService.update(this.getEndpoint(), id, customer).subscribe(
        {
          next: (response) => {
            resolve(response);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

  searchCustomersIntegrator(params?: any) {
    return new Promise((resolve, reject) => {
      this.apiService.list('customer/integrator-searcher', params).subscribe(
        {
          next: (response) => {
            resolve(response.data);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

  syncOxxoPay(customerId: string) {
    return new Promise((resolve, reject) => {
      this.apiService.create(this.getEndpoint() + `/add-payment-method/oxxo`, { customerId }).subscribe(
        {
          next: (response) => {
            resolve(response);
          }, error: (error) => {
            reject(error);
          }
        });
    });
  }

  syncSpei(customerId: string) {
    return new Promise((resolve, reject) => {
      this.apiService.create(this.getEndpoint() + `/add-payment-method/spei`, { customerId }).subscribe(
        {
          next: (response) => {
            resolve(response);
          }, error: (error) => {
            reject(error);
          }
        });
    });
  }

}
