import { FilesM } from './../m-files-m';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostRegistryM } from './../../../services.client/service.registryM';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Component, OnInit } from '@angular/core';
import { urlDownload } from './../../../../../pages/login/login.interceptor';


@Component({
  selector: 'app-file-extras',
  templateUrl: './file-extras.component.html',
  styleUrls: ['./file-extras.component.scss']
})
export class FileExtrasComponent implements OnInit {

  type: string[] = [];
  public urlDownload = urlDownload;
  submitted = false;
  model: FilesM = new FilesM();
  files: FileList;
  getFiles(event) {
    this.files = event.target.files;
  }

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM,
    private router: Router, private http: HttpClient) { }


  registryFile(model) {
    try {
      this.postRegistry.registryFile(model, callback => {
        if (callback) {
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
    this.showFile();
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.files);
    this.model.type = 'Extra';
    this.model.idclient = localStorage.getItem('idClient');
    if (this.model.idclient !== null) {
      this.upload();
      this.submitted = true;
    }
  }

  showFile() {
    this.postRegistry.showFile(callback => {
       this.type = this.postRegistry.extraArray;
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
