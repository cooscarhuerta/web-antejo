import { SweetAlertService } from 'ng2-sweetalert2';
import { App } from './../../../shared/applications-model';
import { HttpClient } from '@angular/common/http';
import { ApplicationModel } from './m-app-registry';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import * as Moment from 'moment';
declare var jQuery: any;
@Component({
  selector: 'app-registry-app',
  templateUrl: './registry-app.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./registry-app.component.scss']
})
export class RegistryAppComponent implements OnInit {

  submitted = false;
  @Input()
  inputAppData: App;
  @Input()
  inputAppId;
  @Output()
  appDataRefresher: EventEmitter<Object>;
  model: App = new App();
  appId;
  public selectedDate: any;
  appData;
  constructor(private http: HttpClient, private sweetAlert: SweetAlertService) {
    this.appDataRefresher = new EventEmitter<Object>();
  }
  ngOnInit() {
    this.model = this.inputAppData;
    this.model.applicationdate = new Date(Date.parse(this.model.applicationdate));
    if ( isNaN( this.model.applicationdate.getTime() ) || this.model.applicationdate.getTime() < 0  ) {  // d.valueOf() could also work
      this.model.applicationdate = new Date();
    }else{
      // passing date through a moment object to avoid any time zone issues
      const appDate = Moment(this.model.applicationdate);
      this.model.applicationdate = appDate.toDate();
    }
    

    this.appId = this.inputAppId;
  }
  getData(event) {
    
  }
  onSubmit() {
  this.submitted = true;
    
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
  }
}
