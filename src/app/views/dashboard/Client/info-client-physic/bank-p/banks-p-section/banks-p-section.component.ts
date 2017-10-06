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

  constructor(private getbank: PostRegistryP, private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) { }

  ngOnInit() {
    this.showBancos();
    for (let i = 0; i < this.bankArray.length; i++) {
      this.bankArray.push()
    }
    this.showBancosList();
  }

  showBancos() {
    this.http.get('/Clients/Clientes/show/Client/' + localStorage.getItem('idClient') + '/BancosClientes')
      .subscribe(res => {
        if (res['error'] === true) {
          this.sweetAlert.swal('Aviso', 'No tiene creditos registrados.', 'warning');
        } else {
          this.bankArray = res['clientbanks'];
        }
        this.dataFinishedLoading = true;
        console.log(this.bankArray)
      });
  }

  showBancosList() {
    this.http.get('/Clients/Clientes/all/Bancos')
      .subscribe(res => {
        this.modelBancos = res['banks']
        this.model.idbank = this.modelBancos[0].id;
      });
  }

  change(b) {
    this.model.idbank = b
  }


  updateBank() {
   // this.http.put('/Clients/Clientes/update/' + localStorage.getItem('idClient') + 'BancosClientes' )

  }


  onUpdate() {
    this.submitted = true;
    this.updateBank();
    console.log(this.model)
  }
}
