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


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
