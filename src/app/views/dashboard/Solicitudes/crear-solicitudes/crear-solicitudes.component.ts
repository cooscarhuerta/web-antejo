import { Selector } from 'ngx-bootstrap/modal/modal-options.class';
import { Class, Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  styleUrls: ['./crear-solicitudes.component.scss']
})


export class CrearSolicitudesComponent implements OnInit {
public solicitud_moral: boolean;
public datos = {
  solicitud : {
    amount : 0,
    start_date : Date.now(),
    location : "",
    term : 0,
    name : ""
  },
  avales : {
    name : "",
    lastname : "",
    RFC : "",
    CURP : "",
    birthdate : Date.now(),
    country : "",
    nationality : "",
    email : "",
    fiel : "",
    address : "",
    phone_number : "",
    marital_status : "",
    marital_regimen : "",
    relationship : "",
    workplace : "",
    work_phone : "",
    position : "",
    join_date : Date.now()


  },
  archivos: {
    comprobante : "",
    estadoCuenta : "",
    RFC : "",
    contrato : ""
  }
}
constructor() {
  this.solicitud_moral = false;
  
}

evento_solicitud(valor) {
  this.solicitud_moral = valor;
}
  ngOnInit() {
  }


}
