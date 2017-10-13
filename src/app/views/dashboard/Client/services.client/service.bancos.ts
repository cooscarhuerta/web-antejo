import { BankM } from './../info-client-moral/bank-m/m-bank-m';
import { BanksM } from './../info-client-moral/bank-m/BanksM';
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

  updateBank(bankArray, callback) {
    this.http.put('/Clients/Clientes/update/' + bankArray.id + '/BancosClientes', bankArray)
      .subscribe(res => {
        if (res['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }

  deleteBank(bankArray, callback) {
    console.log('Servicio', bankArray);
    this.http.delete('/Clients/Clientes/delete/' + bankArray.id + '/BancosClientes', bankArray)
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
}

