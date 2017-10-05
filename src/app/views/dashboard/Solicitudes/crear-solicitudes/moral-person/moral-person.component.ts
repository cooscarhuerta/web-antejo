import { ApplicationsModel } from './../../shared/applications-model';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

interface Data {
  applications?: Object
  avals?: Object
  files?: Object
}
@Component({
  selector: 'app-moral-person',
  templateUrl: './moral-person.component.html',
  styleUrls: ['./moral-person.component.scss']
})
export class MoralPersonComponent implements OnInit {
  @Input() inputData: ApplicationsModel;
  @Output()
  public dataRefresher: EventEmitter<ApplicationsModel>;
  public data: ApplicationsModel;
  public appId;
  constructor() { 
    this.dataRefresher = new EventEmitter<ApplicationsModel>();
    
  }

  ngOnInit() {
    this.data = this.inputData;
    console.log(this.data);
    this.appId = null;
  }
  refreshAppData(appData) {
    this.data.applications = appData;
    this.dataRefresher.emit(appData);
    console.log('raising data 1');
    this.appId = localStorage.getItem('appId');
  }

  refreshAvalData(avalData) {
    this.data.avals = avalData;
    this.dataRefresher.emit(avalData);
    this.appId = localStorage.getItem('appId');
  }
  refreshFileData(fileData) {
    this.data.files = fileData;
    this.dataRefresher.emit(fileData);
    this.appId = localStorage.getItem('appId');
  }
}
