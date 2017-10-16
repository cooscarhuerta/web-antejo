import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-credit',
  templateUrl: './view-credit.component.html',
  styleUrls: ['./view-credit.component.scss']
})
export class ViewCreditComponent implements OnInit {
  DateNow = new Date().toDateString();
  DateMin = null;
  credit = [];
  lastMove = null;
  proyecto = 'Red Social Cazadores';
  moves = '';
  idCredito = null;
  CreditPadre = {};
  modalpay = {
    pay: '',
    sel_moneda: '',
    currency: '',
    date: '',
    file: null
  }

  cliente = 'Jorge Arturo Carvajal Siller';
  constructor() { }

  ngOnInit() {
    this.lastMove = {
      currency: '$',
      capital_balance: 1293098,
      interest_balance : 12930,
      interest: 14,
      iva_balance: 2000,
      interest_arrear: 22,
      interest_arrear_balance: 24,
      interest_arrear_iva_balance: 22,
      period : '08/08/2017',
      iva: 22,
      start_date: new Date(),
      term: 2
    }
    this.CreditPadre = {
      currency: 123123,
      interest: 12,
      interest_arrear: 24,
      iva: 22,
      start_date: new Date(),
      term: 2
    }
    for (let i = 0; i < 5; i++) {
      this.credit.push({
        amount: 12000 * i,
        currency: '$',
        interest: i,
        interest_balance : 123,
        interest_arrear: 2 * i,
        iva: i + 3,
        start_date: new Date(),
        term: i + 8
      })
    }
  }

  addTerm() {
    return new Date();
  }

}