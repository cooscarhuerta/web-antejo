import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { BanksM } from './../BanksM';
import { BankM } from './../m-bank-m';

import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceBankM } from 'app/views/dashboard/Client/services.client/service.bancosM';

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
  name: string[] = [];

  constructor(private serviceB: ServiceBankM, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.showBancosList();
      this.serviceB.showBancos(callback => {
        if (!callback) {
          this.bankArray = this.serviceB.bankArray
          this.name = this.serviceB.name;
          this.dataFinishedLoading = this.serviceB.dataFinishedLoading;
        } else {
          this.sweetAlert.swal('Aviso', 'No tiene bancos registrados.', 'warning');
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
    console.log('controller', bankArray);
    this.serviceB.deleteBank(bankArray, callback => {
      if (!callback) {
        this.sweetAlert.swal('Aviso', 'Informacion de banco eliminada.', 'success');
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino el banco.', 'warning');
      }
    });
  }


  onUpdate(bankArray) {
    try {
      this.serviceB.updateBank(bankArray, callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion de bancos actualizada.', 'success');
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar.', 'warning');
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
