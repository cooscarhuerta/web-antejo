import { SweetAlertService } from 'ng2-sweetalert2';
import { App } from './../../../shared/applications-model';
import { HttpClient } from '@angular/common/http';
import { SolicitudM } from './m-registry-m';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registry-sol-m',
  templateUrl: './registry-sol-m.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./registry-sol-m.component.scss']
})
export class RegistrySolMComponent implements OnInit {

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

  ngOnInit() {
    console.log(this.inputAppData);
    this.model = this.inputAppData;
    console.log("Received model");
    console.log(this.model);
    this.appId = this.inputAppId;

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    if (!this.appId) {
      this.http.post('/Clients/Solicitudes/add', this.model).subscribe((response) => {
        console.log(response);
        if (response['error']) {
          console.log('add application query failed');
        }else {
          this.appId = response['app']['id'];
          this.sweetAlert.swal('Aviso', 'Solicitud agregada correctamente', 'success');
          this.appData = {
            app : this.model,
            appId : this.appId
          }
          this.appDataRefresher.emit(this.appData);
        }
      });
    }else {
      this.http.put('/Clients/Solicitudes/update/' + this.appId, this.model).subscribe((response) => {
        console.log(response);
        if (response['error']) {
          console.log('update application query failed');
        }else {
          this.sweetAlert.swal('Aviso', 'Solicitud actualizada correctamente', 'success');
        }
      });
    }
  }
}
