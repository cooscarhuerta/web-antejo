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
  @Input() inputAppId;
  @Output()
  public dataRefresher: EventEmitter<Object>;
  public data: ApplicationsModel;
  public appId;
  constructor() {
    this.dataRefresher = new EventEmitter<Object>();
  }

  ngOnInit() {
    this.data = this.inputData;
    console.log("midway");
    console.log(this.data);
    this.appId = this.inputAppId;
  }
  refreshAppData(appData) {
    console.log(appData);
    this.data.applications = appData.app;
    this.appId = appData.appId;
    this.dataRefresher.emit(appData);
    console.log('raising data 1');
  }

  refreshAvalData(avalData) {
    this.data.avals = avalData;
    this.dataRefresher.emit(avalData);
  }
  refreshFileData(fileData) {
    this.data.files = fileData;
    this.dataRefresher.emit(fileData);
  }
}
