import { PostRegistryP } from './../services.client/service.registryP';

import { RegistryPComponent } from './registry-p/registry-p.component';
import { FilesPComponent } from './files-p/files-p.component';
import { BankPComponent } from './bank-p/bank-p.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface FullClientModel {
  banks: any[],
  client: any,
  files: any[],
  managers: any[],
  sharedholders: any[]
}

@Component({
  selector: 'app-info-client-physic',
  templateUrl: './info-client-physic.component.html',
  styleUrls: ['./info-client-physic.component.scss']
})

export class InfoClientPhysicComponent implements OnInit {
  public idClient = null;
  @Input() client: any;
  @Output()
  idRefresher: EventEmitter<string> = new EventEmitter<string>();
  fullClient: FullClientModel = {
    banks: [],
    client: this.client,
    files: [],
    managers: [],
    sharedholders: []
  }
  dataFinishedLoading;
  constructor(private postRegistryP: PostRegistryP) {
   }

  public refreshId(event) {
    this.idClient = event;
    this.idRefresher.emit(event);

  }
  ngOnInit() {
    this.dataFinishedLoading = false;
    this.getFullClient();
    this.idClient = localStorage.getItem('idClient');
  }

  getFullClient() {
    this.postRegistryP.showClient(callback => {
      if (callback) {
        if (!callback['error']) {
          this.fullClient = callback;
          console.log(this.fullClient);
        } else {
          console.log('No entro');
        }
        this.dataFinishedLoading = true;
      } else {
        console.log('No se hizo compa')
      }
    });
  }
}
