import { BankM } from './../info-client-moral/bank-m/m-bank-m';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PostRegistryM {
  idclient = localStorage.getItem('idClient');
  fileArray = [];
  name = [];
  managersArray = [];
  sharedArray = [];
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
            localStorage.setItem('clientType', 'moral');
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

  showClient(callback) {
    this.http.get('/Clients/Clientes/show/' + localStorage.getItem('idClient'))
      .subscribe(res => {
        callback(res);
      });
  }

  showManager(callback) {
    this.name = [];
    this.http.get('/Clients/Clientes/show/Client/' + localStorage.getItem('idClient') + '/Managers')
      .subscribe(res => {
        if (res['error'] === false) {
          this.managersArray = res['manager'];
          this.managersArray.forEach(item => {
            this.name.push(item['name']);
            this.dataFinishedLoading = true;
            callback(false);
          });
        } else {
          callback(true);
        }
      });
  }

  deleteManager(managerArray, callback) {
    this.http.delete('/Clients/Clientes/delete/' + managerArray.id + '/Managers', managerArray)
      .subscribe(res => {
        console.log(res)
        if (res['error'] === false) {
          callback(false)
        } else {
          callback(true);
        }
        console.log(res)
      });
  }

  showSharedHolder(callback) {
    this.name = [];
    this.http.get('/Clients/Clientes/show/Client/' + localStorage.getItem('idClient') + '/AccionistasClientes')
      .subscribe(res => {
        if (res['error'] === false) {
          this.sharedArray = res['clientshareholder'];
          this.sharedArray.forEach(item => {
            this.name.push(item['name']);
            this.dataFinishedLoading = true;
            callback(false);
          });
        } else {
          callback(true);
        }
      });
  }

  updateSharedHolder(sharedArray, callback) {
    this.http.put('/Clients/Clientes/update/' + sharedArray.id + '/AccionistasClientes', sharedArray)
      .subscribe(res => {
        if (res['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }

  deleteSharedHolder(sharedArray, callback) {
    this.http.delete('/Clients/Clientes/delete/' + sharedArray.id + '/AccionistasClientes', sharedArray)
      .subscribe(res => {
        console.log(res)
        if (res['error'] === false) {
          callback(false)
        } else {
          callback(true);
        }
        console.log(res)
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

}

