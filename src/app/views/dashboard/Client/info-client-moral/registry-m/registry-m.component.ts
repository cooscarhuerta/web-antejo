import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegistryM } from './m-registry-m';
import { Component, OnInit } from '@angular/core';

import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-registry-m',
  templateUrl: './registry-m.component.html',
  providers: [PatternValidator],
  styleUrls: ['./registry-m.component.scss']
})
export class RegistryMComponent implements OnInit {

  submitted = false;
  model: RegistryM = new RegistryM();


  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM,
    private router: Router, private http: HttpClient) { }

  registryInfo(model) {
    try {
      this.postRegistry.registryInfo(model, callback => {
          if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion agregada exitosamente.', 'success');
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }
  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.registryInfo(this.model);
  }
}
