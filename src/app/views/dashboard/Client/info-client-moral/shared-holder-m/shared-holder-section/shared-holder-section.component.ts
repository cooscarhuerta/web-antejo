import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/shared/services.client/service.registryM';
import { SharedholderM } from '../m-shared-holder-m';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-holder-section',
  templateUrl: './shared-holder-section.component.html',
  styleUrls: ['./shared-holder-section.component.scss']
})
export class SharedHolderSectionComponent implements OnInit {
  submitted = false
  dataFinishedLoading = false;
  model: SharedholderM = new SharedholderM();
  @Input()
  sharedArray: SharedholderM[];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
    this.sharedArray.forEach(item => {
      item.oldname = item.name;
      item.oldlastname = item.lastname;
          });
          this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
       } catch (Exp) {
         
       }}

  onUpdate(shared) {
    this.postRegistry.updateSharedHolder(shared, callback => {
      if (!callback['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de accionistas actualizada.', 'success');
          shared.oldname = shared.name;
          shared.oldlastname = shared.lastname;

        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar la informacion de accionista.', 'warning');
        }
    });
  }

  onDelete(shared) {
    this.postRegistry.deleteSharedHolder(shared, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Informacion de banco eliminada.', 'success');
        for (let i = 0; i < this.sharedArray.length; i++) {
          if (this.sharedArray[i].id === shared.id) {
            this.sharedArray.splice(i, 1);
          }
        }
      } else {
        this.sweetAlert.swal('Aviso', 'No se elimino el banco.', 'warning');
      }
    });
  }
}
