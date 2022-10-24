import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private readonly apiService: ApiService) { }

  getPlans(params?: any){
    return new Promise((resolve, reject) => {
      this.apiService.list('plan', params).subscribe(
        {next: (response) => {
        resolve(response.data);
      }, error: (error) => {
        reject(error);
      }});
    })
  }

  createPlan(plan: {name: string,description: string,price:number}){
    return new Promise((resolve, reject) => {
      this.apiService.create('plan', plan).subscribe(
        {next: (response) => {
        resolve(response);
      }, error: (error) => {
        reject(error);
      }});
    })
  }


}
