
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  public logIn(event, email, password, coolBool, sweetAlert): void {
    event.preventDefault();
    const body = JSON.stringify({email: email, password: password});
    this.http.post('http://localhost:8081/ClientsAuth/LogIn', body,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json')
        }).subscribe(data => {
      // Read the result field from the JSON response.
      if (data['error'] === false) {

        localStorage.setItem('auth_token', data['token']);
        this.router.navigate(['dashboard']);
      }else {
        coolBool[0] = false;
        sweetAlert.swal("Error","Login incorrecto","error");
        console.log('Error al iniciar sesion');
       }
    });
  }


  canActivate() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      return true;

    }
      this.router.navigate(['pages/login'])
      return false;

  }
}
