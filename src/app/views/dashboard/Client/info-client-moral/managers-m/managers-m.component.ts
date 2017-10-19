import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './m-manager-m';
import { FilesM } from './../files-m/m-files-m';
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
  public inputManagerArray: ManagerM[];

  filesModel: FilesM = new FilesM();
  private fileId = null;
  files: FileList;
  getFiles(event) {
      this.files = event.target.files;
  }

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM, private router: Router,
     private http: HttpClient) { }

  registryInfo(model) {
    return new Promise<ManagerM>((resolve, reject) => {
      this.postRegistry.registryInfoM(model, response => {
        if (!response['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de la cuenta de banco agregada exitosamente.', 'success');
          model['id'] = response['id']
          this.managerArray.push(model);
          return resolve(response['manager']);
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
          return reject();
        }
      });
    })
  }

  ngOnInit() {
    this.managerArray = this.inputManagerArray;
    if (this.managerArray.length > 0) {
      this.dataFinishedLoading = true;
    } else {
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
