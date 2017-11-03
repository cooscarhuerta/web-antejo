import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';

@Injectable()
export class PostRegistryP {

  fileArray = [];
  dataFinishedLoading = false;

  constructor(private router: Router, private http: HttpClient) { }

  registryInfo(model, method, callback) {

    if (method === 'POST') {
      model.client.userId = localStorage.getItem('userId');
      this.http.post('/Clients/Clientes/add', model.client,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json')
        }).subscribe(data => {
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

  showClient(callback) {
    this.http.get('/Clients/Clientes/show/' + localStorage.getItem('idClient'))
      .subscribe(res => {
        callback(res);
      });
  }

  registryBank(model, callback) {
    model.idclient = localStorage.getItem('idClient');
    this.http.post('/Clients/Clientes/add/BancosClientes', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        callback(data);
      }
      );
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
        callback(res);
      });
  }

  deleteFile(item, callback) {
    this.http.delete('/Clients/Clientes/delete/' + item.id + '/FilesClient')
      .subscribe(res => {
        if (res['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }

  changePassword(model, callback) {
        if (model.password === model.passwordconfirmation) {
      this.http.put('/Clients/Clientes/update/password/' + localStorage.getItem('idClient'), model,
        {
          headers: new HttpHeaders().set('Content-type', 'application/json')
        }).subscribe(res => {
          callback(res)
          console.log(res)
        });
    } else {
      callback(true);
    }
  }

}
