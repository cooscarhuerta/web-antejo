import { urlDownload } from './../../../../../pages/login/login.interceptor';
import { PostRegistryM } from './../../../services.client/service.registryM';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './../m-manager-m';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-managers-section',
  templateUrl: './managers-section.component.html',
  styleUrls: ['./managers-section.component.scss']
})
export class ManagersSectionComponent implements OnInit {
  public urlDownload = urlDownload;
  submitted = false
  managersArray = [];
  dataFinishedLoading = false;
  model: ManagerM = new ManagerM();
  copyArray = [];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.postRegistry.showManager(callback => {
        if (!callback) {
          this.managersArray = this.postRegistry.managersArray
          this.postRegistry.managersArray.forEach(item => {
          this.copyArray.push({...item})
          })
          this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
        } else {
          this.sweetAlert.swal('Aviso', 'No exiten accionistas registrados.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }

  onUpdate(managersArray) {
    try {
      this.postRegistry.updateManagers(managersArray, callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion de representante actualizada.', 'success');
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar informacion de representante.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp)
    }
  }

  onDelete(managersArray) {
    this.postRegistry.deleteManagers(managersArray, callback => {
      if (!callback) {
        this.sweetAlert.swal('Aviso', 'Informacion de representante eliminada.', 'success');
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino representante.', 'warning');
      }
    });
  }



  }

