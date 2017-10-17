import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { SharedholderM } from '../m-shared-holder-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-holder-section',
  templateUrl: './shared-holder-section.component.html',
  styleUrls: ['./shared-holder-section.component.scss']
})
export class SharedHolderSectionComponent implements OnInit {
  submitted = false
  sharedArray = [];
  dataFinishedLoading = false;
  model: SharedholderM = new SharedholderM();
  copyArray = [];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.postRegistry.showSharedHolder(callback => {
        if (!callback) {
          this.sharedArray = this.postRegistry.sharedArray
          this.postRegistry.sharedArray.forEach(item => {
            this.copyArray.push({...item})
          })
          this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
        } else {
          this.sweetAlert.swal('Aviso', 'No existen accioniostas registrados.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }

  onUpdate(sharedArray) {
    try {
      this.postRegistry.updateSharedHolder(sharedArray, callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion de accionistas actualizada.', 'success');
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar la informacion de accionista.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp)
    }
  }

  onDelete(sharedArray) {
    this.postRegistry.deleteSharedHolder(sharedArray, callback => {
      if (!callback) {
        this.sweetAlert.swal('Aviso', 'Informacion de banco eliminada.', 'success');
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino el banco.', 'warning');
      }
    });
  }

}
