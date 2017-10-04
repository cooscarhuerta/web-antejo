import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { FilesM } from './../../../../Client/info-client-moral/files-m/m-files-m';
import { AvalM } from './m-aval-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aval-m',
  templateUrl: './aval-m.component.html',
  styleUrls: ['./aval-m.component.scss']
})
export class AvalMComponent implements OnInit {


    submitted = false;

  model: AvalM = new AvalM();
  modelM: FilesM = new FilesM();

  files: FileList;
  getFiles(event) {
    this.files = event.target.files;
  }

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM,
    private router: Router, private http: HttpClient) { }


  registryFile(model) {
    try {
      this.postRegistry.registryFile(model, callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Archivo agregado exitosamente.', 'success');
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
    formData.append('type', this.modelM.type);
    formData.append('idclient', this.modelM.idclient);
    this.registryFile(formData);
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.files);
    this.modelM.type = 'Identificacion';
    this.modelM.idclient = localStorage.getItem('idClient');
    if (this.modelM.idclient !== null) {
      this.upload();
      this.submitted = true;

    }

  }

}
