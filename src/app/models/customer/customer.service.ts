import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private readonly apiService: ApiService) { }

  getCustomers(params?: any) {
    return new Promise((resolve, reject) => {
      this.apiService.list('customer', params).subscribe(
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
      this.apiService.get('customer', id).subscribe(
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
      this.apiService.create('customer', customer).subscribe(
        {
          next: (response) => {
            resolve(response);
          }, error: (error) => {
            reject(error);
          }
        });
    })
  }

}
