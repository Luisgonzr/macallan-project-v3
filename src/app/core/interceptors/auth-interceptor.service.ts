import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../auth/session.service';
import { Router } from '@angular/router';

// Remember to add the following code to AppModule:
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// providers: [
//   {
//      provide: HTTP_INTERCEPTORS,
//      useClass: AuthInterceptorService,
//      multi: true
//    }
//   ]

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private session: SessionService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this.session.getItem('token');
    let request = req;
    if (req.headers.get('skip') === 'true') {
      return next.handle(req);
    }
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
