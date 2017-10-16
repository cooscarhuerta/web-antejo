import { PostRegistryM } from './../services.client/service.registryM';
import { ManagersMComponent } from './managers-m/managers-m.component';
import { SharedHolderMComponent } from './shared-holder-m/shared-holder-m.component';
import { RegistryMComponent } from './registry-m/registry-m.component';
import { FilesMComponent } from './files-m/files-m.component';
import { BankMComponent } from './bank-m/bank-m.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


interface fullClientModel {
  banks: any[],
  client: any,
  files: any[],
  managers: any[],
  sharedholders: any[]
}

@Component({
  selector: 'app-info-client-moral',
  templateUrl: './info-client-moral.component.html',
  styleUrls: ['./info-client-moral.component.scss']
})

export class InfoClientMoralComponent implements OnInit {
  public idClient = null;
  public clientType = null;
  @Input() client: any
  @Output()
  idRefresher: EventEmitter<string> = new EventEmitter<string>();
  fullClient: fullClientModel = {
    banks: [],
    client: this.client,
    files: [],
    managers: [],
    sharedholders: []
  }
  dataLoading = false;
  constructor(private postRegistryM: PostRegistryM) {
    this.getFullClient();
  }

  public refreshId(event) {
    this.idClient = event;
    this.idRefresher.emit(event);
  }

  ngOnInit() {
    this.getFullClient();
    this.idClient = localStorage.getItem('idClient');
    this.clientType = localStorage.getItem('clientType');
  }

  getFullClient() {
    this.postRegistryM.showClient(callback => {
      if (callback) {
        if (!callback['error']) {
          this.fullClient = callback;
          this.dataLoading = true;
        } else {
          console.log('No entro');
        }
      } else {
        console.log('No se hizo compa')
      }
    });
  }
}
