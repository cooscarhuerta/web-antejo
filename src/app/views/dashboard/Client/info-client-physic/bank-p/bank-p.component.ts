import { PostRegistryP } from '../../services.client/service.registryP';

import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BanksP } from './BanksP';
import { BankP } from './m-bank-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-p',
  templateUrl: './bank-p.component.html',
  styleUrls: ['./bank-p.component.scss']
})
export class BankPComponent implements OnInit {
  submitted = false;

  model: BankP = new BankP();
  modelBancos: BanksP[] = [];

  constructor(private postRegistry: PostRegistryP, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.showBancos();
  }

  showBancos() {
    this.http.get('http://192.168.1.191:81/Clients/Clientes/all/Bancos')
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
    this.submitted = true;
    this.registryBank(this.model);
    console.log(this.model)
  }


}

