import { Component, Injectable,  OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SweetAlertService} from 'ng2-sweetalert2';
import {NgForm} from '@angular/forms';
@Component({
  templateUrl: 'login.component.html',
  providers: [SweetAlertService, HttpClient, NgForm]
})
@Injectable()
export class LoginComponent implements OnInit {
  results = null;
  constructor(private http: HttpClient, private swalService: SweetAlertService) { }
  ngOnInit(): void {

  }

  public logIn(loginForm: NgForm): void {
    event.preventDefault();
    var email, password;
    const body = {
      email : email,
      password : password
    }
    this.http.post('http://localhost/bantejo/public/AdminAuth/LogIn', body,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json')
        }).subscribe(data => {
      // Read the result field from the JSON response.
      if (data['error'] === true) {
        this.swalService.swal('Error', data['message'], 'error');
      }else{
        console.log('yay');
        this.swalService.swal('Error', data['message'], 'error');
      }
      console.log(data);


    });
  }
}
