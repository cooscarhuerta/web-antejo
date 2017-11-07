import { Pass } from './m-pass';
import { NgForm } from '@angular/forms/src/directives';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from './../shared/services.client/service.registryP';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss']
})

export class RestPasswordComponent {

model: Pass = new Pass('', '', '');

  constructor(private sweetAlert: SweetAlertService, private http: HttpClient, private service: PostRegistryP) { }

  public onSubmit() {
    this.change(this.model);
  }

  public change(model): void {
    try {
      this.service.changePassword(model, callback => {
        if (callback['error'] === false) {
          this.sweetAlert.swal('Aviso', 'Cambio de constraseña exitosa.', 'success');
        } else {
          this.sweetAlert.swal('Error', 'Error al modificar constraseña', 'error');

        }
      })
    } catch (Exp) {
      console.log(Exp)
    }

  }
}
