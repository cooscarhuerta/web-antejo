import { urlDownload } from './../../../../../pages/login/login.interceptor';
import { PostRegistryM } from './../../../shared/services.client/service.registryM';
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
  dataFinishedLoading = false;
  model: ManagerM = new ManagerM();
  @Input()
  managerArray: ManagerM[];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.managerArray.forEach(item => {
        item.oldname = item.name;
        item.oldlastname = item.lastname;
      });
      this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
    } catch (Exp) {
      
    }
  }

  onUpdate(managers) {
      this.postRegistry.updateManagers(managers, callback => {
        if (!callback['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de accionistas actualizada.', 'success');
          managers.oldname = managers.name;
          managers.oldlastname = managers.lastname;
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar la informacion de accionista.', 'warning');
        }
    });
  }

  onDelete(managersArray) {
    this.postRegistry.deleteManagers(managersArray, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de banco eliminada.', 'success');
        for (let i = 0; i < this.managerArray.length; i++) {
          if (this.managerArray[i].id === managersArray.id) {
            this.managerArray.splice(i, 1);
          }
        }
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino el banco.', 'warning');
      }
    });
  }
}

