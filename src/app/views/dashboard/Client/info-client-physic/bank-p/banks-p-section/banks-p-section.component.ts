import { ServiceBank } from '../../../services.client/service.bancos';
import { BanksP } from './../BanksP';
import { BankP } from './../m-bank-p';
import { PostRegistryP } from '../../../services.client/service.registryP';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks-p-section',
  templateUrl: './banks-p-section.component.html',
  styleUrls: ['./banks-p-section.component.scss']
})
export class BanksPSectionComponent implements OnInit {

  submitted = false
  bankArray = [];
  dataFinishedLoading = false;
  model: BankP = new BankP();
  modelBancos: BanksP[] = [];
  name: string[] = [];

  constructor(private serviceB: ServiceBank, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    this.showBancosList();
    const idClient = localStorage.getItem('idClient');
    console.log(idClient);
    if (idClient) {
      this.serviceB.showBancos(callback => {
        if (!callback) {
          this.bankArray = this.serviceB.bankArray
          this.name = this.serviceB.name;
          this.dataFinishedLoading = this.serviceB.dataFinishedLoading;
        } else {
          this.sweetAlert.swal('Aviso', 'No tiene bancos registrados.', 'warning');
        }
      });
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
        if (!res['error']) {
          this.modelBancos = res['banks']
          this.model.idbank = this.modelBancos[0].id;
        }
      });
  }
}
