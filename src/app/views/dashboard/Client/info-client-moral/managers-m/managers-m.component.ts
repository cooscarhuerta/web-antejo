import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/shared/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './m-manager-m';
import { File } from './../../shared/files/file';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-managers-m',
  templateUrl: './managers-m.component.html',
  styleUrls: ['./managers-m.component.scss']
})
export class ManagersMComponent implements OnInit {
  submitted = false;
  dataFinishedLoading = false;
  managerModel: ManagerM = new ManagerM();
  managerArray: ManagerM[];
  @Input()
  public inputManagerArray: Array<ManagerM>;

  filesModel: File = new File();
  private fileId = null;
  files: FileList;
  getFiles(event) {
      this.files = event.target.files;
  }

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM, private router: Router,
     private http: HttpClient) { }

  registryInfo(model) {
      this.postRegistry.registryInfoM(model, callback => {
        if (callback['error']) {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        } else {
          console.log('Llamada', callback)
          this.inputManagerArray = callback['manager']
          this.sweetAlert.swal('Aviso', 'Informacion de la cuenta de banco agregada exitosamente.', 'success');
        }
      });
  }

  ngOnInit() {
    if (this.managerArray.length > 0) {
      this.dataFinishedLoading = true;
    } else {
      this.sweetAlert.swal('Aviso', 'No cuenta con representantes registrados', 'warning');
      this.dataFinishedLoading = false;
    }
  }

  onSubmit() {
    this.filesModel.type = 'Identificacion';
    this.filesModel.idclient = localStorage.getItem('idClient');
    if (this.managerModel.idclient !== null) {
      this.upload();
      this.submitted = true;
    }
  }

  registryFile(formData) {
    try {
      this.postRegistry.registryFile(formData, data => {
        if (data) {
          this.sweetAlert.swal('Aviso', 'Archivo agregado exitosamente.', 'success');
          this.fileId = data['file']['id'];
          this.registryInfo(this.managerModel);
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.files[0]);
    formData.append('type', this.filesModel.type);
    formData.append('idclient', this.filesModel.idclient);
    return this.registryFile(formData);
  }
}
