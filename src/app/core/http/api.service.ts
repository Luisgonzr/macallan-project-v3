import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SessionService } from '../auth/session.service';
// API
import { ApiCore } from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = ApiCore.BASE_URL + ApiCore.API;
  private options:any;

  constructor(
    private httpClient: HttpClient,
    private session: SessionService
  ) { }

  /**
   * Get a list of objects/data from the API
   * @param endpoint Object/data name
   * @param queryParams  GET parameters to be included in the query
   */
  public list(endpoint: string, queryParams?: any): Observable<any> {
    this.options = {
      headers: new HttpHeaders()
      // .set('Authorization', `Bearer ${this.session.getItem('token')}`)
    };
    let queryParamsString = '';
    if (queryParams) {
      queryParamsString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
    }
    return this.httpClient
      .get(`${this.url}/${endpoint}?${queryParamsString}`, this.options)
      .pipe(map((data: any) => {
        this.session.setItem('token', data.token);
        return data;
      }), catchError(err => throwError(err.error)));
  }

  /**
   * Get single object/data from API
   * @param endpoint Object/data name
   * @param id Object/data identifier
   */
  public get(endpoint: string, id: string): Observable<any> {
    this.options = {
      headers: new HttpHeaders()
      // .set('Authorization', `Bearer ${this.session.getItem('token')}`)
    };
    return this.httpClient
      .get(`${this.url}/${endpoint}/${id}`, this.options)
      .pipe(map((data: any) => {
        this.session.setItem('token', data.token);
        return data;
      }), catchError(err => throwError(err.error)));
  }

  /**
   * Create an object/data using API
   * @param endpoint Object/data name
   * @param object Object/data as a JSON {key:value}
   */
  public create(endpoint: string, object: any): Observable<any> {
    return this.httpClient
      .post(`${this.url}/${endpoint}`, object)
      .pipe(map((data: any) => {
        this.session.setItem('token', data.token);
        return data;
      }), catchError(err => throwError(err.error)));
  }

  /**
   * Update an object/data using API
   * @param endpoint Object/data name
   * @param id Object/data identifier
   * @param object Object/data as a JSON {key:value}
   */
  public update(endpoint: string, id: string, object: any): Observable<any> {
    return this.httpClient
      .put(`${this.url}/${endpoint}/${id}`, object)
      .pipe(map((data: any) => {
        this.session.setItem('token', data.token);
        return data;
      }), catchError(err => throwError(err.error)));
  }

  /**
   * Delete an object/data from API
   * @param endpoint Object/data name
   * @param id Object/data identifier
   */
  public delete(endpoint: string, id: string): Observable<any> {
    return this.httpClient
      .delete(`${this.url}/${endpoint}/${id}`)
      .pipe(map((data: any) => {
        this.session.setItem('token', data.token);
        return data;
      }), catchError(err => throwError(err.error)));
  }

}
