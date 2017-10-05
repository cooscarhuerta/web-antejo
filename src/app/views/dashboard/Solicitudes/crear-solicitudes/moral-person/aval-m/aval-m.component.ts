import { Aval } from './../../../shared/applications-model';
import { AvalM } from './m-aval-m';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aval-m',
  templateUrl: './aval-m.component.html',
  styleUrls: ['./aval-m.component.scss']
})
export class AvalMComponent implements OnInit {


  submitted = false;
  @Input()
  inputAvalData: Aval[];
  @Output()
  avalDataRefresher: EventEmitter<Aval>;
  model: Aval;
  constructor() {

    this.avalDataRefresher = new EventEmitter<Aval>();
   }
  ngOnInit() {
    this.model = this.inputAvalData[0];
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.avalDataRefresher.emit(this.model);
  }

}
