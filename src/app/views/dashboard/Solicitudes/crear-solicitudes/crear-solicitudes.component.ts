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

  public refreshAppData(appData) {
    this.appId = localStorage.getItem('appId');
    console.log('raising data 2');
  }
  constructor() {

  }

  ngOnInit() {
    this.clientType = localStorage.getItem('clientType');
    console.log(this.data);
  }
}
