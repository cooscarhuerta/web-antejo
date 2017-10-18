import { ServiceBank } from './../../services.client/service.bancos';
import { Banks } from './../banks';
import { Bank } from './../bank';
import { Component, OnInit, Input } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-section',
  templateUrl: './bank-section.component.html',
  styleUrls: ['./bank-section.component.scss']
})
export class BankSectionComponent implements OnInit {
  submitted = false;
  dataFinishedLoading = false;
  model: Bank = new Bank();
  @Input()
  banksArray: Bank[];
  @Input()
  availableBanks: Banks[];

  constructor(private serviceB: ServiceBank, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {

  }

  change(idbank) {
    this.model.idbank = idbank;
    for (let i = 0; i < this.availableBanks.length; i++) {
      if (this.availableBanks[i].id === idbank) {
        this.model.namebank = this.availableBanks[i].name;
        break;
      }
    }
    }


  onDelete(bank) {
    this.serviceB.deleteBank(bank, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de cuenta eliminada.', 'success');
        for (let i = 0; i < this.banksArray.length; i++) {
          if (this.banksArray[i].id === bank.id) {
            this.banksArray.splice(i, 1);
          }
        }
      } else {
        this.sweetAlert.swal('Error', 'No se elimino cuenta de banco.', 'warning');
      }
    });
  }

  onUpdate(bank) {
    this.serviceB.updateBank(bank, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de cuenta actualizada.', 'success');
        for (let i = 0; i < this.banksArray.length; i++) {
          if (this.banksArray[i].id === bank.id) {
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


