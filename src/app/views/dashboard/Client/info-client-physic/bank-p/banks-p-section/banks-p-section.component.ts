import { ServiceBank } from '../../../services.client/service.bancos';
import { BanksP } from './../BanksP';
import { BankP } from './../m-bank-p';
import { PostRegistryP } from '../../../services.client/service.registryP';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banks-p-section',
  templateUrl: './banks-p-section.component.html',
  styleUrls: ['./banks-p-section.component.scss']
})
export class BanksPSectionComponent implements OnInit {

  submitted = false;
  dataFinishedLoading = false;
  model: BankP = new BankP();
  @Input()
  banksArray: BankP[];
  @Input()
  availableBanks: BanksP[];

  constructor(private serviceB: ServiceBank, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
  }

  change(idbank) {
    console.log(idbank);
    this.model.idbank = idbank;
    for (let i = 0; i < this.availableBanks.length; i++) {
      console.log("trying");
      console.log(this.availableBanks[i].id);
      if (this.availableBanks[i].id == idbank) {
        this.model.namebank = this.availableBanks[i].name;
        console.log("yeah");
        break;
      }
    }
    console.log(this.model);
  }

  onDelete(bank) {
    this.serviceB.deleteBank(bank, callback => {
      console.log(bank);
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de cuenta eliminada.', 'success');
        for (let i = 0; i < this.banksArray.length; i++) {
          if (this.banksArray[i].id === bank.id) {
            console.log("Deleting");
            this.banksArray.splice(i, 1);
          }
        }
      } else {
        this.sweetAlert.swal('Error', 'No se elimino cuenta de banco.', 'warning');
      }
    });
  }

  onUpdate(bank) {
    console.log(bank);
    this.serviceB.updateBank(bank, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de cuenta actualizada.', 'success');
        for (let i = 0; i < this.banksArray.length; i++) {
          if (this.banksArray[i].id === bank.id) {
            console.log("Updating");
            this.banksArray[i] = bank;
            break;
          }
        }
      } else {
        this.sweetAlert.swal('Error', 'No se pudo actualizar cuenta de banco.', 'warning');
      }
    });
  }
}
