import { Selector } from 'ngx-bootstrap/modal/modal-options.class';
import { Class, Component, OnInit, NgModule, Input, Output } from '@angular/core';
import { ApplicationsModel } from './../shared/applications-model';
@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  styleUrls: ['./crear-solicitudes.component.scss']
})


export class CrearSolicitudesComponent implements OnInit {
  public clientType: string;
  private appId;
  public data: ApplicationsModel = new ApplicationsModel();

  // update the value of the application id, once the application has been created
  public refreshAppData(appData) {
    this.appId = appData.appId;
    console.log('raising data 2');
  }
  constructor() {

  }
  // initialize the application id (can be null if it's a new application) and client type (moral/physical)
  ngOnInit() {
    this.appId = null;
    this.clientType = localStorage.getItem('clientType');
  }
}
