import { urlDownload } from './../../../../../pages/login/login.interceptor';
import { PostRegistryP } from './../../../services.client/service.registryP';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';
import { FilesP } from './../m-files-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-dl',
  templateUrl: './file-dl.component.html',
  styleUrls: ['./file-dl.component.scss']
})
export class FileDLComponent implements OnInit {
  public urlDownload = urlDownload;
  submitted = false;
  model: FilesP = new FilesP();
  name: string[] = [];
  type: string[] = [];
  created: string[] = [];

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
   this.showFileDL();
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.files);
    this.model.type = 'Documentacion Legal';
    this.model.idclient = localStorage.getItem('idClient');
    if (this.model.idclient !== null) {
      this.upload();
      this.submitted = true;
    }

  }

  showFileDL() {
    this.postRegistry.showFile(callback => {
       this.type = this.postRegistry.docArray;
       console.log(this.type);
      });
  }

  deleFile(item) {
    this.postRegistry.deleteFile(item, callback => {
      if (!callback) {
        this.sweetAlert.swal('Aviso', 'Archivo eliminado exitosamente.', 'success');
      } else {
        this.sweetAlert.swal('Error', 'Error al eliminar archivo', 'error');
      }
    });
  } catch(Exp) {
    console.log(Exp);
  }

}
