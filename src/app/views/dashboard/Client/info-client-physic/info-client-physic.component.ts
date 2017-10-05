
import { RegistryPComponent } from './registry-p/registry-p.component';
import { FilesPComponent } from './files-p/files-p.component';
import { BankPComponent } from './bank-p/bank-p.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-info-client-physic',
  templateUrl: './info-client-physic.component.html',
  styleUrls: ['./info-client-physic.component.scss']
})
export class InfoClientPhysicComponent implements OnInit {
  public idClient = null;
  constructor() { }
  @Input() client: any
  @Output()
  idRefresher: EventEmitter<string> = new EventEmitter<string>();

  public refreshId(event){
    this.idClient = event;
    this.idRefresher.emit(event);

  }
  ngOnInit() {
    console.log(this.client)

    this.idClient = localStorage.getItem('idClient');
  }

}
