import { PostRegistryP } from './../../../../Client/services.client/service.registryP';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { FilesP } from './../../../../Client/info-client-physic/files-p/m-files-p';
import { AvalP } from './m-aval-p';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aval-p',
  templateUrl: './aval-p.component.html',
  styleUrls: ['./aval-p.component.scss']
})
export class AvalPComponent implements OnInit {
  @Input() 
  inputAvalData:AvalP;
  @Output()
  appDataRefresher: EventEmitter<Object>;
  submitted = false;

  model: AvalP = new AvalP();
  modelF: FilesP = new FilesP();

  files: FileList;
  getFiles(event) {
    this.files = event.target.files;
  }

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryP,
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
    formData.append('type', this.modelF.type);
    formData.append('idclient', this.modelF.idclient);
    this.registryFile(formData);
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.files);
    this.modelF.type = 'Identificacion';
    this.modelF.idclient = localStorage.getItem('idClient');
    if (this.modelF.idclient !== null) {
      this.upload();
      this.submitted = true;

    }

  }

}
