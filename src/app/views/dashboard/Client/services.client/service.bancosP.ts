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
        if (res['error'] === true) {
          callback(false);
        } else {
          this.bankArray = res['clientbanks'];
          this.bankArray.forEach(item => {
            this.name.push(item['namebank']);
          });
        }
        this.dataFinishedLoading = true;
        callback(this.dataFinishedLoading);
      });
  }

  updateBank(bank, callback) {
    this.http.put('/Clients/Clientes/update/' + localStorage.getItem('idClient') + '/BancosClientes', bank)
      .subscribe(res => {
        if (res['error'] === true) {
         callback(true);
        } else {
         callback(false);
        }
      });
  }

  deleteBank() {
    this.http.delete('/Clients/Clientes/delete/' + localStorage.getItem('idClient') + '/BancosClientes')
    .subscribe(res => {
      if (res['error'] === true) {
        this.sweetAlert.swal('Aviso', 'No se elimino el banco.', 'warning');
      } else {
        this.sweetAlert.swal('Aviso', 'Informacion de banco eliminada.', 'success');

      }

    });

  }

}

