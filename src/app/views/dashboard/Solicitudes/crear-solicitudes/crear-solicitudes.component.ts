import { SweetAlertService } from 'ng2-sweetalert2';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Selector } from 'ngx-bootstrap/modal/modal-options.class';
import { Class, Component, OnInit, NgModule, Input, Output } from '@angular/core';
import { ApplicationsModel } from './../shared/applications-model';
@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./crear-solicitudes.component.scss']
})


export class CrearSolicitudesComponent implements OnInit {
  public clientType: string;
  public appId;
  public finishedLoadingApp: boolean = false;
  public data: ApplicationsModel = new ApplicationsModel();

  // update the value of the application id, once the application has been created
  public refreshAppData(appData) {
    this.appId = appData.appId;

  }
  constructor(private route: ActivatedRoute, private http: HttpClient, private sweetAlert: SweetAlertService) { }
  // initialize the application id (can be null if it's a new application) and client type (moral/physical)
  ngOnInit() {
    this.appId = null;
    this.route.params.subscribe(params => {

      if (params.appId) {
        this.appId = params.appId;
        this.http.get('/Clients/Solicitudes/show/' + params.appId).subscribe(response => {
          if (response['error'] === true) {
            this.sweetAlert.swal('Error', 'No se pudieron cargar los datos de la solicitud', 'error')
          } else {


            this.data.applications = response['application'];
            this.data.files = response['files'];
            this.data.avals = response['creditaids'];
          }
          this.finishedLoadingApp = true;
        })
      } else {
        this.finishedLoadingApp = true;
      }
    });
  }
}
