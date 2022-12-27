import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'; // npm i jwt-decode
import { SessionService } from './session.service';

interface DecodedJwt {
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  /**
   * Return true if JSON Web Token has a valid structure
   * @param jwt JSON Web Token string
   */
  isValid(jwt: string): boolean {
    try {
      jwt_decode(jwt);
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }

  /**
   * Return true if JSON Web Token expired
   * @param jwt Valid JSON Web Token string
   */
  isExpired(jwt: string): boolean {
    const decoded: DecodedJwt = jwt_decode(jwt);
    if (Date.now() >= decoded.exp * 1000) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Return data structure from payload
   * @param jwt Valid JSON Web Token string
   * @param dataName Node that contains the data. OPTIONAL
   */
  getData(jwt: string, dataName?: string | undefined): any {
    if (dataName === undefined) {
      dataName = 'data';
    }
    const decoded:any = jwt_decode(jwt);
    return decoded[dataName];
  }
}
