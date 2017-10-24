import { ApplicationsModel } from './../../shared/applications-model';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

interface Data {
  applications?: Object
  avals?: Object
  files?: Object
}
@Component({
  selector: 'app-application-data',
  templateUrl: './application-data.component.html',
  styleUrls: ['./application-data.component.scss']
})
export class ApplicationDataComponent implements OnInit {
  @Input() inputData: ApplicationsModel;
  @Input() inputAppId;
  @Output()
  public dataRefresher: EventEmitter<Object>;
  public data: ApplicationsModel;
  public appId;
  fileTypes = [
    { 'fileDescriptor': 'Comprobante de Domicilio', 'fileType': 'Domicilio' },
    { 'fileDescriptor': 'Estados de Cuenta', 'fileType': 'Cuentas' },
    { 'fileDescriptor': 'RFC', 'fileType': 'RFC' },
    { 'fileDescriptor': 'Proforma', ' fileType': 'Proforma' },
    { 'fileDescriptor': 'Informacion Financiera', 'fileType': 'Identificacion' }
  ]
  constructor() {
    this.dataRefresher = new EventEmitter<Object>();
  }

  ngOnInit() {
    this.data = this.inputData;


    this.appId = this.inputAppId;
  }
  refreshAppData(appData) {

    this.data.applications = appData.app;
    this.appId = appData.appId;
    this.dataRefresher.emit(appData);

  }

  refreshAvalData(avalData) {
    let found: Boolean = false;
    let i = 0;
    while (i < this.data.avals.length) {
      if (avalData.id === this.data.avals[i].id) {
        found = true;
        break;
      }
      i++;
    }
    if (!found) {
      this.data.avals.push(avalData);
    } else {
      this.data.avals[i] = avalData;
    }
  }
  refreshFileData(fileData) {
    this.data.files.push(fileData);
  }
}
