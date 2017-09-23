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

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }


}
