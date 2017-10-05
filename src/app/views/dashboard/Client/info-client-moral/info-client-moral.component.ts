import { ManagersMComponent } from './managers-m/managers-m.component';
import { SharedHolderMComponent } from './shared-holder-m/shared-holder-m.component';
import { RegistryMComponent } from './registry-m/registry-m.component';
import { FilesMComponent } from './files-m/files-m.component';
import { BankMComponent } from './bank-m/bank-m.component';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-info-client-moral',
  templateUrl: './info-client-moral.component.html',
  styleUrls: ['./info-client-moral.component.scss']
})
export class InfoClientMoralComponent implements OnInit {
  public idClient = null;
  public clientType = null;
  constructor() { }
  @Input() client: any
  @Output()
  idRefresher: EventEmitter<string> = new EventEmitter<string>();
  
  public refreshId(event){
    this.idClient = event;
    this.idRefresher.emit(event);
    
  }
  ngOnInit() {
    this.idClient = localStorage.getItem('idClient');
    this.clientType = localStorage.getItem('clientType');
  }
}
