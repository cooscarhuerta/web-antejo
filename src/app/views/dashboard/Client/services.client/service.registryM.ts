import { BankM } from './../info-client-moral/bank-m/m-bank-m';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PostRegistryM {

  model: BankM = new BankM();
  idclient = localStorage.getItem('idClient');

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model, method, callback) {
    
    if(method == 'POST'){
      model.client.userId = localStorage.getItem('userId');
      this.http.post('/Clients/Clientes/add', model.client,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        console.log("doing stuff");
        if (data['error'] === false) {
          localStorage.setItem('idClient',data['client']['id']);
          localStorage.setItem('clientType',"moral");    
          callback(false);
        } else {
          callback(true);
        }
        // Read the result field from the JSON response.

      });
    }else{
      this.http.put('/Clients/Clientes/update/'+localStorage.getItem('idClient'), model.client,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
        // Read the result field from the JSON response.

      });
    }
    
  }

  registryBank(model, callback) {
    model.idclient = this.idclient;
    this.http.post('/Clients/Clientes/add/BancosClientes', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }
  registryInfoM(model, callback) {
    model.idclient = this.idclient;
    this.http.post('/Clients/Clientes/add/Managers', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.

        if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }


      });
  }

  registryInfoSH(model, callback) {
    model.idclient = this.idclient;
    this.http.post('/Clients/Clientes/add/AccionistasClientes', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.

        if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }

  registryFile(model, callback) {
    
    this.http.post('/Clients/Clientes/add/FilesClient', model,
     {
        headers: new HttpHeaders().set('Content-type', 'multipart/form-data')
     }).subscribe(data => {
         if (data['error'] === false) {
          callback(data);
        } else {
          callback(null);
        }
     });
  }


}
