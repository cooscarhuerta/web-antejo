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
  registryInfoM(model, callback) {

    model.idclient = this.idclient;
    this.http.post('/Clients/Clientes/add/Managers', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        callback(data)
      });
    }

  showManager(callback) {
    this.name = [];
    this.http.get('/Clients/Clientes/show/Client/' + localStorage.getItem('idClient') + '/Managers')
      .subscribe(res => {
        if (res['error'] === false) {
          this.managersArray = res['managers'];
          this.dataFinishedLoading = true;
          callback(false);
        } else {
          callback(true);
        }
      });
  }
  updateManagers(manager, callback) {
    this.http.put('/Clients/Clientes/update/' + manager.id + '/Managers', manager)
      .subscribe(res => {
        callback(res);
      });
  }
  deleteManagers(manager, callback) {
    this.http.delete('/Clients/Clientes/delete/' + manager.id + '/Managers', manager)
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
    this.http.get('/Clients/Clientes/show/Client/' + localStorage.getItem('idClient') + '/AccionistasClientes')
      .subscribe(res => {
        if (res['error'] === false) {
          this.sharedArray = res['clientshareholder'];
          this.dataFinishedLoading = true;
          callback(false);
        } else {
          callback(true);
        }
      });
  }
  updateSharedHolder(shared, callback) {
    this.http.put('/Clients/Clientes/update/' + shared.id + '/AccionistasClientes', shared)
      .subscribe(res => {
        callback(res);
      });
  }
  deleteSharedHolder(shared, callback) {
    this.http.delete('/Clients/Clientes/delete/' + shared.id + '/AccionistasClientes', shared)
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
        callback(data);
      });
  }
  registryFile(model, callback) {

    this.http.post('/Clients/Clientes/add/FilesClient', model,
      {
        headers: new HttpHeaders().set('Content-type', 'multipart/form-data')
      }).subscribe(data => {
        console.log(data)
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

