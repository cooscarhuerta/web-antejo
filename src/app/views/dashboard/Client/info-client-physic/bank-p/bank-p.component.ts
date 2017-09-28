
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

  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.showBancos();
  }

  showBancos() {
    this.http.get('http://192.168.1.191:81/Clients/Clientes/show')
      .subscribe(res => {
        console.log(res);
      });
  }

  registryBank(model): void {
    this.http.post('http://192.168.1.191:81/Clients/Clientes/add/Bancos', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
      });
  }

  change(b) {
    this.model.idbanco = b
  }

  onSubmit() {
    this.submitted = true;
      console.log(this.model.idbanco);

   // this.registryBank(this.model);
    console.log(this.model);
  }


}

