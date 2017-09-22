import { AvalM } from './m-aval-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aval-m',
  templateUrl: './aval-m.component.html',
  styleUrls: ['./aval-m.component.scss']
})
export class AvalMComponent implements OnInit {


    submitted = false;

  model: AvalM = new AvalM();


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
