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
  submitted = false
  dataFinishedLoading = false;
  public RFCPattern = '[A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3}';
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
        this.sweetAlert.swal('Aviso', 'Informacion de representante actualizada.', 'success');
        managers.oldname = managers.name;
        managers.oldlastname = managers.lastname;
      } else {
        this.sweetAlert.swal('Aviso', 'No se pudo actualizar la informacion de representante', 'warning');
      }
    });
  }

  onDelete(managersArray) {
    this.sweetAlert.swal({
      title: '¿Seguro que deseas eliminar?',
      text: 'No podras recuperar los datos',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((isConfirm) => {
      if (isConfirm) {
        this.postRegistry.deleteManagers(managersArray, callback => {
          if (!callback['error']) {
            this.sweetAlert.swal('Aviso', 'Informacion de representante eliminada.', 'success');
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
    }, (cancel) => {
      this.sweetAlert.swal('Aviso', 'No se elimino el representante.', 'info');
    });
  }

}

