import { ServiceBank } from '../../../services.client/service.bancos';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { BanksM } from './../BanksM';
import { BankM } from './../m-bank-m';

import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks-m-section',
  templateUrl: './banks-m-section.component.html',
  styleUrls: ['./banks-m-section.component.scss']
})
export class BanksMSectionComponent implements OnInit {

  submitted = false
  bankArray = [];
  dataFinishedLoading = false;
  model: BankM = new BankM();
  modelBancos: BanksM[] = [];
  copyArray = [];

  constructor(private serviceB: ServiceBank, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.showBancosList();
      this.serviceB.showBancos(callback => {
        if (!callback) {
          this.bankArray = this.serviceB.bankArray
          this.serviceB.bankArray.forEach(item => {
            this.copyArray.push({...item})
          })
          this.dataFinishedLoading = this.serviceB.dataFinishedLoading;
        } else {
          this.sweetAlert.swal('Aviso', 'No existen cuentas de banco registradas.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }

  change(b) {
    this.model.idbank = b
  }


  onDelete(bankArray) {
    this.serviceB.deleteBank(bankArray, callback => {
      if (!callback) {
        this.sweetAlert.swal('Aviso', 'Informacion de cuenta eliminada.', 'success');
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino la cuenta de banco.', 'warning');
      }
    });
  }

  onUpdate(bankArray) {
    try {
      this.serviceB.updateBank(bankArray, callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion de cuenta actualizada.', 'success');
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar la cuenta de banco.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp)
    }
  }

  showBancosList() {
    this.http.get('/Clients/Clientes/all/Bancos')
      .subscribe(res => {
        this.modelBancos = res['banks']
        this.model.idbank = this.modelBancos[0].id;
      });
  }
}
