import { BankM } from './../info-client-moral/bank-m/m-bank-m';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PostRegistryM {

  model: BankM = new BankM();
  idclient = '';

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model, callback) {
    this.http.post('/Clients/Clientes/add', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        if (data['error'] === false) {
          this.idclient = data['client']['id']
          callback(false);
        } else {
          callback(true);
        }
        // Read the result field from the JSON response.

      });
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




}
