import { Selector } from 'ngx-bootstrap/modal/modal-options.class';
import { Class, Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-crear-solicitudes',
  templateUrl: './crear-solicitudes.component.html',
  styleUrls: ['./crear-solicitudes.component.scss']
})


export class CrearSolicitudesComponent implements OnInit {
public solicitud_moral: boolean;

constructor() {
  this.solicitud_moral = false;

}

evento_solicitud(valor) {
  this.solicitud_moral = valor;
}
  ngOnInit() {
  }


}
