import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceBank {
  bankArray = [];
  name: string[] = [];
  dataFinishedLoading = false;

  constructor(private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) { }

  showBancos(callback) {
    this.name = [];
    this.http.get('/Clients/Clientes/show/Client/' + localStorage.getItem('idClient') + '/BancosClientes')
      .subscribe(res => {
        if (res['error'] === false) {
          this.bankArray = res['clientbanks'];
          this.bankArray.forEach(item => {
          this.name.push(item['namebank']);
          this.dataFinishedLoading = true;
          callback(false);
          });
        } else {
          callback(true);
        }
      });
  }

  updateBank(bank, callback) {
    this.http.put('/Clients/Clientes/update/' + bank.id + '/BancosClientes', bank)
      .subscribe(res => {
        callback(res)
      });
  }

  deleteBank(bank, callback) {
    this.http.delete('/Clients/Clientes/delete/' + bank.id + '/BancosClientes', bank)
      .subscribe(res => {
        callback(res)
      });
  }

  getBanks(callback) {

    this.http.get('/Clients/Clientes/all/Bancos')
      .subscribe(res => {
        callback(res['banks']);
      });
  }
}

