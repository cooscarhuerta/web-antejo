import { BankP } from './../info-client-physic/bank-p/m-bank-p';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PostRegistryP {

  model: BankP = new BankP();

  idclient = '';

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model): void {
    this.http.post('http://192.168.1.191:81/Clients/Clientes/add', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.
        this.idclient = data['client']['id'];
      });
  }

  registryBank(model): void {
    this.http.post('http://192.168.1.191:81/Clients/Clientes/add/Bancos', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        this.model.idclient = this.idclient;
      });
  }
}
