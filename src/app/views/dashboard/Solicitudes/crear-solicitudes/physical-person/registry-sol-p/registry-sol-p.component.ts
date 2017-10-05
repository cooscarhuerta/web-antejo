import { SolicitudP } from './m-registry-p';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registry-sol-p',
  templateUrl: './registry-sol-p.component.html',
  styleUrls: ['./registry-sol-p.component.scss']
})
export class RegistrySolPComponent implements OnInit {


  submitted = false;
  @Input() 
  inputAppData:SolicitudP;
  @Output()
  appDataRefresher: EventEmitter<Object>;
  model: SolicitudP = new SolicitudP();


  ngOnInit() {
    this.model = this.inputAppData;
    this.appDataRefresher = new EventEmitter<Object>();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.appDataRefresher.emit(this.model);
  }
}
