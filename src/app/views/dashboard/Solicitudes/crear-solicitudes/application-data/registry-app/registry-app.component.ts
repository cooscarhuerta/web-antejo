import { SweetAlertService } from 'ng2-sweetalert2';
import { App } from './../../../shared/applications-model';
import { HttpClient } from '@angular/common/http';
import { ApplicationModel } from './m-app-registry';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-registry-app',
  templateUrl: './registry-app.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./registry-app.component.scss']
})
export class RegistryAppComponent implements OnInit, OnChanges {

  submitted = false;
  @Input()
  inputAppData: App;
  @Input()
  inputAppId;
  @Output()
  appDataRefresher: EventEmitter<Object>;
  model: App = new App();
  appId;

  appData;
  constructor(private http: HttpClient, private sweetAlert: SweetAlertService) {
    this.appDataRefresher = new EventEmitter<Object>();
  }
  ngOnChanges(change) {
    console.log(change);

  }
  ngOnInit() {

    this.model = this.inputAppData;


    this.appId = this.inputAppId;

  }
  getData(event) {
    console.log(event);

  }
  onSubmit() {
    var data = jQuery("input[name*='applicationdate']").val();
    console.log(data);
  /*
  this.submitted = true;
    console.log(this.model);
    if (!this.appId) {
      this.http.post('/Clients/Solicitudes/add', this.model).subscribe((response) => {

        if (response['error']) {

        } else {
          this.appId = response['app']['id'];
          this.sweetAlert.swal('Aviso', 'Solicitud agregada correctamente', 'success');
          this.appData = {
            app: this.model,
            appId: this.appId
          }
          this.appDataRefresher.emit(this.appData);
        }
      });
    } else {
      this.http.put('/Clients/Solicitudes/update/' + this.appId, this.model).subscribe((response) => {

        if (response['error']) {

        } else {
          this.sweetAlert.swal('Aviso', 'Solicitud actualizada correctamente', 'success');
        }
      });
    }
  */
  }
}
