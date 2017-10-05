import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const apiUrl = 'http://localhost:8081';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      const token = localStorage.getItem('auth_token');
      let authReq = req.clone();
      if (!req.headers.has('Content-type')) {
        authReq = authReq.clone({
          headers: authReq.headers.set('Content-type', 'application/json'),
        });
      } else {
        if (req.headers.get('Content-type') === 'multipart/form-data') {
          authReq = authReq.clone({
            headers: authReq.headers.delete('Content-type')
          });
        }
      }
      authReq = authReq.clone({
        headers: authReq.headers.set('token', token != null ? token : ''),
        url: apiUrl + authReq.url
      });
      return next.handle(authReq);
    } catch (ex) {
      console.log(ex)
    }
  }
}
