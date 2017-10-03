import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './m-manager-m';
import { FilesM } from './../files-m/m-files-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managers-m',
  templateUrl: './managers-m.component.html',
  styleUrls: ['./managers-m.component.scss']
})
export class ManagersMComponent implements OnInit {
  submitted = false;

  model: ManagerM = new ManagerM();
  filesModel: FilesM = new FilesM();
  private fileId = null;

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM, private router: Router,
     private http: HttpClient) { }

  registryInfo(model) {
    try {
      model.idfile = this.fileId;
      this.postRegistry.registryInfoM(model, callback => {
           if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion de representante agregada exitosamente.', 'success');
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }
  ngOnInit() {

  }

  onSubmit() {
    this.filesModel.type = 'Identificacion';
    this.filesModel.idclient = localStorage.getItem('idClient');
    if(this.model.idclient !== null){
      this.upload();
      this.submitted = true;
    }
  }


  registryFile(formData) {
    try {
      this.postRegistry.registryFile(formData,data => {
        if (data) {
          this.sweetAlert.swal('Aviso', 'Archivo agregado exitosamente.', 'success');
          this.fileId = data['file']['id'];
          this.registryInfo(this.model);
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }
  files : FileList; 
  getFiles(event){ 
      this.files = event.target.files; 
  } 

  upload() {
    const formData = new FormData();
    formData.append("file", this.files[0]);
    formData.append("type",this.filesModel.type);
    formData.append("idclient",this.filesModel.idclient);
    return this.registryFile(formData);
  }
}
