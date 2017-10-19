import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
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
  copyArray: any[] = [];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    this.postRegistry.showSharedHolder(callback => {
      if (!callback) {
        this.sharedArray = this.postRegistry.sharedArray;
        this.postRegistry.sharedArray.forEach(item => {
          this.copyArray.push({...item});
          });
          this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
      } else {

      }
    })
  }

  onUpdate(shared) {
    this.postRegistry.updateSharedHolder(shared, callback => {
      if (!callback['error']) {
        if (!callback['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de accionistas actualizada.', 'success');
          for (let i = 0; i < this.sharedArray.length; i++) {
            if (this.sharedArray[i].id === shared.id) {
              this.copyArray[i] = {...shared};
              break;
            }
          }
        } else {
          this.sweetAlert.swal('Aviso', 'No se pudo actualizar la informacion de accionista.', 'warning');
        }
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
