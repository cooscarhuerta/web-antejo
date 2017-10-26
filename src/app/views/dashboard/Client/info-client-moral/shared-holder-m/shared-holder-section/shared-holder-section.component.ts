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
  public RFCPattern = '[A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3}';
  @Input()
  sharedArray: SharedholderM[];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.sharedArray.forEach(item => {
        let date: string[] = item.oldwork.toString().split('-');
      item.oldwork = new Date( parseInt( date[0] ),parseInt( date[1] ),parseInt( date[2] ) );
        item.oldname = item.name;
        item.oldlastname = item.lastname;
      });
      this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
    } catch (Exp) {

    }
  }

  onUpdate(shared) {
    this.postRegistry.updateSharedHolder(shared, callback => {
      if (!callback['error']) {
        this.sweetAlert.swal('Aviso', 'Información de accionistas actualizada.', 'success');
        shared.oldname = shared.name;
        shared.oldlastname = shared.lastname;

      } else {
        this.sweetAlert.swal('Aviso', 'No se pudo actualizar la información de accionista.', 'warning');
      }
    });
  }

  onDelete(shared) {
    this.sweetAlert.swal({
      title: '¿Desea eliminar?',
      text: 'No podrás recuperar los datos',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((isConfirm) => {
      if (isConfirm) {
        this.postRegistry.deleteSharedHolder(shared, callback => {
          if (!callback['error']) {
            this.sweetAlert.swal('Aviso', 'Información de accionista eliminada.', 'success');
            for (let i = 0; i < this.sharedArray.length; i++) {
              if (this.sharedArray[i].id === shared.id) {
                this.sharedArray.splice(i, 1);
              }
            }
          } else {
            this.sweetAlert.swal('Aviso', 'No se elimino el accionista.', 'warning');
          }
        });
      }
    }, (cancel) => {
      this.sweetAlert.swal('Aviso', 'No se elimino el accionista.', 'info');
    });
  }

}
