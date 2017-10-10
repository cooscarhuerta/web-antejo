import { BanksP } from './../BanksP';
import { BankP } from './../m-bank-p';
import { PostRegistryP } from '../../../services.client/service.registryP';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceBankP } from 'app/views/dashboard/Client/services.client/service.bancosP';

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

  constructor(private serviceB: ServiceBankP, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.showBancosList();
      this.serviceB.showBancos(callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'No tiene creditos registrados.', 'warning');
        } else {
          this.bankArray = this.serviceB.bankArray
          this.name = this.serviceB.name;
          this.dataFinishedLoading = this.serviceB.dataFinishedLoading;
        }
      })
    } catch (Exp) {
      console.log(Exp);
    }
  }

  change(b) {
    this.model.idbank = b
  }


  onDelete() {
    this.submitted = true;
    this.serviceB.deleteBank();
  }


  onUpdate(bank) {
    this.submitted = true;

    this.serviceB.updateBank(bank, callback => {
      try {
        if (!callback) {
          callback(true);
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar.', 'warning');
        } else {
          callback(false);
          this.sweetAlert.swal('Aviso', 'Informacion de bancos actualizada.', 'success');
        }
      } catch (Exp) {
        console.log(Exp)
      }
    }
    );
  }

  showBancosList() {
    this.http.get('/Clients/Clientes/all/Bancos')
      .subscribe(res => {
        this.modelBancos = res['banks']
        this.model.idbank = this.modelBancos[0].id;
      });
  }
}
