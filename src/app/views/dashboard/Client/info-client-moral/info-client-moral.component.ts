import { PostRegistryM } from './../shared/services.client/service.registryM';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


interface FullClientModel {
  banks: any[],
  client: any,
  files: any[],
  managers: any[],
  shareholders: any[]
}

@Component({
  selector: 'app-info-client-moral',
  templateUrl: './info-client-moral.component.html',
  styleUrls: ['./info-client-moral.component.scss']
})

export class InfoClientMoralComponent implements OnInit {
  public idClient = null;
  @Input() client: any
  fileTypes = [
    { 'fileDescriptor': 'Acta Asamblea', 'fileType': 'Asamblea' },
    { 'fileDescriptor': 'Acta Constitutiva', 'fileType': 'Constitutiva' },
    { 'fileDescriptor': 'Extras', 'fileType': 'Extras' }
  ]
  @Output()
  idRefresher: EventEmitter<string> = new EventEmitter<string>();
  fullClient: FullClientModel = {
    banks: [],
    client: this.client,
    files: [],
    managers: [],
    shareholders: []
  }
  dataFinishedLoading;
  constructor(private postRegistryM: PostRegistryM) {
  }

  public refreshId(event) {
    this.idClient = event;
    this.idRefresher.emit(event);

  }
  ngOnInit() {
    this.dataFinishedLoading = false;
    this.idClient = localStorage.getItem('idClient');
    if ( this.idClient !== null) {
        this.getFullClient();
    }else{
      this.dataFinishedLoading = true;
    }
  }

  getFullClient() {
    this.postRegistryM.showClient(callback => {
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
