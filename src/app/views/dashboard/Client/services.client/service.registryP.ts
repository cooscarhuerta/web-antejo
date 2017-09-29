import { BankP } from './../info-client-physic/bank-p/m-bank-p';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  selector: 'service-registry-P',
  providers: [SweetAlertService]
})

@Injectable()
export class PostRegistryP {

  model: BankP = new BankP();

  idclient = '';

  constructor(private router: Router, private http: HttpClient, private sweetAlert : SweetAlertService) { }

  registryInfo(model): void {
    this.http.post('/Clients/Clientes/add', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        console.log(data);
        if(data['error'] === true){
          this.sweetAlert.swal('Aviso',"Informacion agregada exitosamente.","success");
        }else{
          this.sweetAlert.swal('Error',"Error al validar campos","error");
        }
        // Read the result field from the JSON response.
        //this.idclient = data['client']['id'];
      });
  }

  registryBank(model): void {
    this.http.post('/Clients/Clientes/add/Bancos', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        this.model.idclient = this.idclient;
      });
  }
}
