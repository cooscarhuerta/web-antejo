import { BankM } from './../info-client-moral/bank-m/m-bank-m';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PostRegistryM {

  model: BankM = new BankM();
  idclient = '';

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model): void {
    this.http.post('/Clients/Clientes/add', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        console.log(data);
        // Read the result field from the JSON response.
        //this.idclient = data['client']['id']
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
  registryInfoM(model): void {
    this.http.post('/Clients/Clientes/add/Managers', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.
        // this.model.idclient = localStorage.getItem('iduser');
      });
  }


  registryInfoSH(model): void {
    this.http.post('/Clients/Clientes/add/AccionistasClientes', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.
        // this.model.idclient = localStorage.getItem('iduser');
      });
  }




}
