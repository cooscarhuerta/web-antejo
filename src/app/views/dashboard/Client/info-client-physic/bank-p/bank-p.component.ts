import { ServiceBank } from './../../services.client/service.bancos';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from '../../services.client/service.registryP';

import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BanksP } from './BanksP';
import { BankP } from './m-bank-p';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bank-p',
  templateUrl: './bank-p.component.html',
  providers: [ServiceBank],
  styleUrls: ['./bank-p.component.scss']
})
export class BankPComponent implements OnInit {
  dataFinishedLoading;
  submitted = false;
  bankModel: BankP = new BankP();
  banksArray: BankP[];
  availableBanks: BanksP[] = [];
  @Input()
  inputBanksArray: BankP[];

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryP,
    private router: Router, private http: HttpClient, private bankService: ServiceBank) { }

  ngOnInit() {
    this.dataFinishedLoading = false;
    this.banksArray = this.inputBanksArray;
    console.log(this.banksArray);
    this.getBanks();
  }

  registryBank(model) {
    return new Promise<BankP>((resolve, reject) => {
      this.postRegistry.registryBank(model, response => {
        if (!response['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de la cuenta de banco agregada exitosamente.', 'success');
          model['id'] = response['id']
          this.banksArray.push(model);
          console.log(model);
          console.log(this.banksArray);
          return resolve(response['bank']);
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
          return reject();
        }
      });
    })
  }
  change(bankId) {
    this.bankModel.idbank = bankId;
    for (let  i = 0; i < this.availableBanks.length; i++) {
      if (this.availableBanks[i].id == bankId) {
        this.bankModel.namebank = this.availableBanks[i].name;
        break;
      }
    }
    console.log(this.bankModel);
  }

  getBanks() {
    this.bankService.getBanks(availableBanks => {
      if (availableBanks) {
        this.availableBanks = availableBanks;
      }
      this.dataFinishedLoading = true;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.registryBank(this.bankModel);
  }
}

