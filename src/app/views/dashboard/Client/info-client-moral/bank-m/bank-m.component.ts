import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BanksM } from './BanksM';
import { BankM } from './m-bank-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-m',
  templateUrl: './bank-m.component.html',
  styleUrls: ['./bank-m.component.scss']
})
export class BankMComponent implements OnInit {
submitted = false;

  model: BankM = new BankM();
  modelBancos: BanksM[] = [];

  constructor(private postRegistry: PostRegistryM, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.showBancos();
  }

  showBancos() {
    this.http.get('/Clients/Clientes/all/Bancos')
      .subscribe(res => {
        this.modelBancos = res['banks']
        this.model.idbanco = this.modelBancos[0].id;
      });
  }

    registryBank(model) {
    try {
      this.postRegistry.registryBank(model);
      this.model.idclient = this.postRegistry.idclient;
    } catch (Exp) {
      console.log(Exp)
    }
  }

    change(b) {
    this.model.idbanco = b
  }

  onSubmit() {
    this.registryBank(this.model);
    this.submitted = true;
    console.log(this.model);
  }
}
