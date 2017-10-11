import { BankP } from './../info-client-physic/bank-p/m-bank-p';
import { BanksP } from './../info-client-physic/bank-p/BanksP';
import { SweetAlertService } from 'ng2-sweetalert2';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceBankP {
  bankArray = [];
  name: string[] = [];
  dataFinishedLoading = false;
  modelBancos: BanksP[] = [];
  model: BankP = new BankP();


  constructor(private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) { }

  showBancos(callback) {
    this.name = [];
    this.http.get('/Clients/Clientes/show/' + localStorage.getItem('idClient') + '/BancosClientes')
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
