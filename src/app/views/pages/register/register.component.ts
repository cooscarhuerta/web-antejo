
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Component, Injectable } from '@angular/core';

@Component({
  templateUrl: 'register.component.html',
  providers: [SweetAlertService, HttpClient]
})
@Injectable()
export class RegisterComponent {

  constructor(private http: HttpClient, private swalService: SweetAlertService) { }

  public registry(event, name, email, password, passwordconfirmation): void {
    event.preventDefault();
    const body = JSON.stringify({
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordconfirmation
    });
    this.http.post('/Register', body, {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    }).subscribe(data => {

      console.log(body, data);
      if (data['error'] === true) {
        this.swalService.swal('Error', data['message'], 'error');
      }else {
        this.swalService.swal('Aviso', data['message'], 'success');
      }

     });
  }

}
