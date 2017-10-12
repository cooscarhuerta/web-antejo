import { PostRegistryP } from './../../../services.client/service.registryP';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { FilesP } from './../m-files-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-an',
  templateUrl: './file-an.component.html',
  styleUrls: ['./file-an.component.scss']
})
export class FileANComponent implements OnInit {

  type: string[] = [];
  submitted = false;
  model: FilesP = new FilesP();
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
    formData.append('type', this.model.type);
    formData.append('idclient', this.model.idclient);
    this.registryFile(formData);
  }

  ngOnInit() {
    this.showFileAN()
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.files);
    this.model.type = 'Acta Nacimiento';
    this.model.idclient = localStorage.getItem('idClient');
    if (this.model.idclient !== null) {
      this.upload();
      this.submitted = true;
    }

  }


  showFileAN() {
    this.postRegistry.showFile(callback => {

       this.type = this.postRegistry.actaArray;
       console.log(this.type);
      });
  }


}
