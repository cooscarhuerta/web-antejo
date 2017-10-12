import { BankP } from './../info-client-physic/bank-p/m-bank-p';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';


@Injectable()
export class PostRegistryP {

  docArray = [];
  rfcArray = [];
  actaArray = [];
  type: string[] = [];
  dataFinishedLoading = false;

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model, method, callback) {

    if (method === 'POST') {
      model.client.userId = localStorage.getItem('userId');
      this.http.post('/Clients/Clientes/add', model.client,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json')
        }).subscribe(data => {
          console.log('doing stuff');
          if (data['error'] === false) {
            localStorage.setItem('idClient', data['client']['id']);
            localStorage.setItem('clientType', 'physical');
            callback(false);
          } else {
            callback(true);
          }
          // Read the result field from the JSON response.

        });
    } else {
      this.http.put('/Clients/Clientes/update/' + localStorage.getItem('idClient'), model.client,
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
    model.idclient = localStorage.getItem('idClient');
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

  registryFile(model, callback) {

    this.http.post('/Clients/Clientes/add/FilesClient', model,
      {
        headers: new HttpHeaders().set('Content-type', 'multipart/form-data')
      }).subscribe(data => {
        if (data['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }


  showFile(callback) {
    this.http.get('/Clients/Clientes/show/' + localStorage.getItem('idClient'))
      .subscribe(res => {
        if (res['error'] === false) {
          this.docArray = res['files'].filter(item => {
            return item.type === 'Documentacion Legal'
          });
          this.rfcArray = res['files'].filter(item => {
            return item.type === 'RFC'
          });
          this.actaArray = res['files'].filter(item => {
            return item.type === 'Acta Nacimiento'
          });
          callback(false);
        } else {
          callback(true);
        }
      });
  }





}
