import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aval-m',
  templateUrl: './aval-m.component.html',
  styleUrls: ['./aval-m.component.scss']
})
export class AvalMComponent implements OnInit {


  avales = {
    companyname: '',
    aval: '',
  }
  constructor() { }

  ngOnInit() {
  }


}
