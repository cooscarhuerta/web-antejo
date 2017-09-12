import { ExtendHttpService } from './extend-http.service';
import { Observable } from 'rxjs/Observable';

import { Http, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: ExtendHttpService) { }
  logIn(email, password, callback): void {
    const body = JSON.stringify({ email, password });
    this.http.post('http://localhost/bantejo/public/AdminAuth/LogIn', body, null).map((res: Response) => console.log(res.json()))
    this.http.post('http://localhost/bantejo/public/AdminAuth/LogIn', body,
      {
        headers: null
      }).subscribe(data => {
        console.log(data)
        // Read the result field from the JSON response.
        if (data['error'] === false) {
          // action
          localStorage.setItem('tokenKey', JSON.stringify(data['token']));
          callback(true)
        } else {
          // accion
          callback(false)
        }
      });
  }
   getToken() {
      const currentUser = JSON.parse(localStorage.getItem('tokenKey'));
      if (currentUser && currentUser.token) {
        const headers = 'Baerer ' + currentUser.token
        return headers
      }
      return null
    }
}
