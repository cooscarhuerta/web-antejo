
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  public logIn(event, email, password, coolBool, sweetAlert): void {
    event.preventDefault();
    const body = JSON.stringify({ email: email, password: password });
    this.http.post('/ClientsAuth/LogIn', body,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.

        if (data['error'] === false) {
          localStorage.setItem('auth_token', data['token']);
          localStorage.setItem('userId', data['user']['id']);
          if(data['user']['idclient']!==null){
            console.log("setting id");
            localStorage.setItem('idClient', data['user']['idclient']);
            if(data['clientType']!==null){
              localStorage.setItem('clientType',data['clientType']);
            }
            this.router.navigate(['dashboard']);
          }else{
            this.router.navigate(['cliente/view']);
          }
        } else {
          coolBool[0] = false;
          sweetAlert.swal('Error', 'Login incorrecto', 'error');
        }
      });
  }


  canActivate() {
    return this.http.get('/ClientsAuth/RefreshToken').toPromise().then(data => {
      localStorage.setItem('userId', data['user']['id']);
      localStorage.setItem('auth_token', data['user']['api_token']);
      return true;
    }).catch(data => {
      localStorage.clear();
      this.router.navigate(['pages/login']);
      return false;
    })
  }
}
