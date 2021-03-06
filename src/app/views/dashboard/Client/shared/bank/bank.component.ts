import { ServiceBank } from './../services.client/service.bancos';
import { Banks } from './banks';
import { Bank } from './bank'
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/shared/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  providers: [ServiceBank],
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  dataFinishedLoading;
  submitted = false;
  bankModel: Bank = new Bank();
  banksArray: Bank[];
  availableBanks: Banks[] = [];
  public accountnumberPattern = '[0-9]{10,12}';
  public clabePattern = '[0-9]{18}';
  @Input()
  inputBanksArray: Bank[];

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM,
    private router: Router, private http: HttpClient, private bankService: ServiceBank) { }

  ngOnInit() {
    this.dataFinishedLoading = false;
    this.banksArray = this.inputBanksArray;
    // this.localStorage
    // this.getBanks();
  }
  registryBank(model) {
    return new Promise<Bank>((resolve, reject) => {
      this.postRegistry.registryBank(model, response => {
        if (!response['error']) {
          this.sweetAlert.swal('Aviso', 'Información de cuenta bancaria agregada exitosamente.', 'success');
          model['id'] = response['id']
          this.banksArray.push({...model});
          return resolve(response['bank']);
        } else {
          this.sweetAlert.swal('Error', 'Error al válidar campos', 'error');
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





