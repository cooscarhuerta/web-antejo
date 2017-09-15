import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aval-p',
  templateUrl: './aval-p.component.html',
  styleUrls: ['./aval-p.component.scss']
})
export class AvalPComponent implements OnInit {
  avales = {
    name : '',
    lastname : '',
    RFC : '',
    CURP : '',
    birthdate : Date.now(),
    country : '',
    nationality : '',
    email : '',
    fiel : '',
    address : '',
    phone_number : '',
    marital_status : '',
    marital_regimen : '',
    relationship : '',
    workplace : '',
    work_phone : '',
    position : '',
    join_date : Date.now()


  }
  constructor() { }

  ngOnInit() {
  }

}
