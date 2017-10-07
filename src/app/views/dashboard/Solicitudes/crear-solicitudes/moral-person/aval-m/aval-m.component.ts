import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Aval } from './../../../shared/applications-model';
import { AvalM } from './m-aval-m';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aval-m',
  templateUrl: './aval-m.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./aval-m.component.scss']
})
export class AvalMComponent implements OnInit {


  submitted = false;
  clientType;
  @Input()
  inputAvalData: Aval[];
  @Input()
  inputAppId;
  @Output()
  avalDataRefresher: EventEmitter<Aval>;
  model: Aval;
  public appId;
  constructor(private http:HttpClient, private sweetAlert: SweetAlertService) {
    this.avalDataRefresher = new EventEmitter<Aval>();
  }
  ngOnInit() {
    this.appId = this.inputAppId;
    this.clientType = null;
    if (this.inputAvalData.length === 0) {
      this.model = new Aval;
      this.model.idapplication = this.appId;
    } else {
      this.model = this.inputAvalData[0];
    }

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.http.post('/Clients/Solicitudes/add/AvalCredito', this.model).subscribe( response => {
      if(response['error']){
        this.sweetAlert.swal('Error','No se pudo establecer conexion al servidor','error');
      }else{
        console.log(response);
      }
    })
    this.avalDataRefresher.emit(this.model);
  }

}
