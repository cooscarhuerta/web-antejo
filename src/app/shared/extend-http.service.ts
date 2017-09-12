
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExtendHttpService extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, private authService: AuthService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        console.log('Aqui', options.headers)
        options.headers.set('Content-type', 'application/json')
        console.log('Aqui', options.headers)
      }
      this.setHeaders(options);
    } else {
      this.setHeaders(url);
    }
    return this.request(url, options).catch(this.catchErrors());
  }

  private catchErrors() {
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        this.router.navigate(['logout']);
      }
      return Observable.throw(res);
    };
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    const token = this.authService.getToken()
    if (token) {
      objectToSetHeadersTo.headers.append('Authorization', token)
    }
  }
}
