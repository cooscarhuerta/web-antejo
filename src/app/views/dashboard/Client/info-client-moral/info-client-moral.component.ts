import { PostRegistryM } from './../services.client/service.registryM';
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
  @Output()
  fileTypes = [
    { 'fileDescriptor': 'Acta Asamblea', 'fileType': 'Asamblea' },
    { 'fileDescriptor': 'Acta Constitutiva', 'fileType': 'Constitutiva' },
    { 'fileDescriptor': 'Extras', 'fileType': 'Extras' }
  ]
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
    this.getFullClient();
    this.idClient = localStorage.getItem('idClient');
  }

  getFullClient() {
    this.postRegistryM.showClient(callback => {
      if (callback) {
        if (!callback['error']) {
          this.fullClient = callback;
          console.log('Cliente', this.fullClient);
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
