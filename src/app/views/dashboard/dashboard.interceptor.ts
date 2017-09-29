/*import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

var apiUrl = "http://localhost:8081";

@Injectable()
export class DashboardInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
        const token = localStorage.getItem('auth_token');
        const authReq = req.clone({
            headers: req.headers.set('Content-type', 'application/json')
                .set('token', token != null ? token : ''),
                url : apiUrl+req.url
        });
        return next.handle(authReq);
    }catch (ex) {
      console.log(ex)
    }
  }
}
*/