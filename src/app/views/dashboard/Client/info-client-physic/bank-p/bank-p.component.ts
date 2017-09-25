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
  modelBancos: BanksP = new BanksP();

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<BanksP>('http://localhost/bantejo/public/Clients/Clientes/all/Bancos')
      .subscribe(bancos => console.log(bancos))

  }

  onSubmit() {
    this.submitted = true;
  }


}
