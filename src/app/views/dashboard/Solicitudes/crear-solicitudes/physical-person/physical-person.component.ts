import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Data {
  applications?: Object
  avals?: Object
  files?: Object
}

@Component({
  selector: 'app-physical-person',
  templateUrl: './physical-person.component.html',
  styleUrls: ['./physical-person.component.scss']
})


export class PhysicalPersonComponent implements OnInit {
  @Input() inputData: Object;
  @Output() dataRefresher: EventEmitter<Object>;
  public data: Data;
  public appId;
  constructor() { }

  ngOnInit() {
    this.appId = null;
    this.data = this.inputData;
    this.dataRefresher = new EventEmitter<Object>();
  }
  refreshAppData(appData) {
    this.data.applications = appData;
    this.appId = localStorage.getItem('appId');
    this.dataRefresher.emit(appData);
  }
  refreshAvalData(avalData) {
    this.data.avals = avalData;
    this.appId = localStorage.getItem('appId');
    this.dataRefresher.emit(avalData);
  }
  refreshFileData(fileData) {
    this.data.files = fileData;
    this.appId = localStorage.getItem('appId');
    this.dataRefresher.emit(fileData);
  }
}
