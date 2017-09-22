import { Component, Injectable,  OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SweetAlertService} from 'ng2-sweetalert2';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [SweetAlertService, HttpClient, NgForm]
})
@Injectable()
export class LoginComponent implements OnInit {
    results = null;
    loggingIn = false;
    constructor(private http: HttpClient, private swalService: SweetAlertService, private router: Router) {

    }


  public logIn(event, email, password): void {
    event.preventDefault();
    const body = JSON.stringify({email: email, password: password});
    this.loggingIn = true;
    this.http.post('http://localhost:8081/ClientsAuth/LogIn', body,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json')
        }).subscribe(data => {
      // Read the result field from the JSON response.
      if (data['error'] === false) {
          localStorage.setItem('tokenK', data['token']);
          this.router.navigate(['/']);

      }else {
          this.loggingIn = false;
          this.swalService.swal('Error', data['message'], 'error');
      }
      console.log(data);
    });
  }

  ngOnInit(): void {

  }
}
