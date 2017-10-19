import { urlDownload } from './../../../../../pages/login/login.interceptor';
import { PostRegistryM } from './../../../services.client/service.registryM';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './../m-manager-m';
import { Component, OnInit, Input } from '@angular/core';


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
  @Input()
  managerArray: ManagerM[];
  copyArray: any[] = [];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    this.postRegistry.showManager(callback => {
      if (!callback) {
        this.managerArray = this.postRegistry.managersArray;
        this.postRegistry.managersArray.forEach(item => {
          this.copyArray.push({...item});
        });
        this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
      }else {

      }
    })
  }

  onUpdate(managers) {
    try {
      this.postRegistry.updateManagers(managers, callback => {
        if (!callback['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de accionistas actualizada.', 'success');
          for (let i = 0; i < this.managersArray.length; i++) {
            if (this.managersArray[i].id === managers.id) {
              this.copyArray[i] = {...managers};
              break;
            }
          }
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar la informacion de accionista.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp)
    }
  }

  onDelete(managersArray) {
    this.postRegistry.deleteManagers(managersArray, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de banco eliminada.', 'success');
        for (let i = 0; i < this.managersArray.length; i++) {
          if (this.managersArray[i].id === managersArray.id) {
            this.managersArray.splice(i, 1);
          }
        }
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino el banco.', 'warning');
      }
    });
  }
}

