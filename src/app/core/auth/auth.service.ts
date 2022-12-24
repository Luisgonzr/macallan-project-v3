import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ApiCore } from '../../config/api';
import { JwtService } from './jwt.service';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = ApiCore.BASE_URL + ApiCore.AUTH;

  constructor(private http: HttpClient, private jwt: JwtService, private session: SessionService) { }

  /**
   * Login user using webservice to get a JSON Web Token and store it in Local Storage key Token
   * @param email Email string value
   * @param password Password string value
   * @returns Observable to which you will need to subscribe to get the webservice response or error
   */
  public login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        skip: 'true'
      })
    };
    return this.http.post<any>(this.baseUrl + ApiCore.LOGIN, {
      email, password
    }, httpOptions).pipe(map((response: any) => {
      this.setToken(response.token);
      return response;
    }), catchError(this.errorHandler));
  }

  /**
   * Sign a new user using webservice. User needs to login after, no JSON Web Token is stored
   * @param email Email string value
   * @param password Password string value
   * @param name Name string value
   * @returns Observable to which you will need to subscribe to get the webservice response or error
   */
  public signin(email: string, password: string, name: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        skip: 'true'
      })
    };
    return this.http.post<any>(this.baseUrl + ApiCore.SIGNIN, {
      email, password, name
    }, httpOptions).pipe(map((response: any) => {
      this.setToken(response.token);
      return response;
    }), catchError(this.errorHandler));
  }

  /**
   * Removes the Local Storage key Token value
   */
  public logout(): void {
    this.session.removeItem('token');
  }

  /**
   * Set the Local Sotrage key Token value with the JSON Web Token
   * @param token String with the valid JSON Web Token value
   */
  private setToken(token: string): void {
    if(token === undefined){

    }else{
      this.session.setItem('token', token);
    }
  }

  /**
   * Get the Email value if the JSON Web Token value is set in Local Storage key Token
   * @returns Email string value or empty string
   */
  public getEmail(): string {
    const decodedToken = this.jwt.getData(this.getToken());
    if (decodedToken == null) {
      return '';
    } else {
      return decodedToken.email;
    }
  }

  /**
   * Get the Name value if the JSON Web Token value is set in Local Storage key Token
   * @returns Name string value or empty string
   */
  public getName(): string {
    const decodedToken = this.jwt.getData(this.getToken());
    if (decodedToken == null) {
      return '';
    } else {
      return decodedToken.name;
    }
  }

  /**
   * Get the Name value if the JSON Web Token value is set in Local Storage key Token
   * @returns Name string value or empty string
   */
  private getToken(): string {
    const token = this.session.getItem('token');
    if (token == null) {
      return '';
    } else {
      return token;
    }
  }


  /**
   * Get the UserType value if the JSON Web Token value is set in Local Storage key Token
   * @returns Name string value or empty string
   */
  public getUserType(): string {
    const decodedToken = this.jwt.getData(this.getToken());
    if (decodedToken == null) {
      return '';
    } else {
      return decodedToken.userType;
    }
  }

  /**
   * Validates if the JSON Web Token from Local Storage key Token is set and it has not expired
   * @returns Boolean True or False
   */
  public isAuthenticated(): boolean {
    return !this.jwt.isExpired(this.getToken());
  }

  /**
   * Sends the JSON Web Token to the webserver to validate it in order to avoid corruption or falsification
   * @returns Observable to which you will need to subscribe to get the webservice response or error
   */
  verify() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getToken()
      })
    };
    return this.http.get<any>(this.baseUrl + ApiCore.VERIFY, httpOptions).pipe(map(response => {
      this.setToken(response.token);
      return response;
    }), catchError(this.errorHandlerVerify));
  }

  /**
   * Catch the error and get the data from error property
   * @param error HttpErrorResponse object
   * @returns JSON object with the error property value
   */
   private errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error))
  }

  /**
   * Catch the error for Verify and get the data from error property
   * @param error HttpErrorResponse object
   * @returns JSON object with the error property value
   */
  private errorHandlerVerify(error: HttpErrorResponse) {
    this.session.removeItem('token');
    return throwError(() => new Error(error.error))
  }

}
