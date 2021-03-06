import { PostRegistryP } from './../shared/services.client/service.registryP';
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
  fileTypes = [
    { 'fileDescriptor': 'Documentacion Legal', 'fileType': 'Documentacion Legal' },
    { 'fileDescriptor': 'RFC', 'fileType': 'RFC' },
    { 'fileDescriptor': 'Acta de Nacimiento', 'fileType': 'Acta de Nacimiento' }
  ]
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
    this.idClient = localStorage.getItem('idClient');
    if(this.idClient != null) {
        this.getFullClient();
    }else{
      this.dataFinishedLoading = true;
    }
  }

  getFullClient() {
    this.postRegistryP.showClient(callback => {
      if (callback) {
        if (!callback['error']) {
          this.fullClient = callback;
          
        } else {
          
        }
        this.dataFinishedLoading = true;
      } else {
        
      }
    });
  }
}
