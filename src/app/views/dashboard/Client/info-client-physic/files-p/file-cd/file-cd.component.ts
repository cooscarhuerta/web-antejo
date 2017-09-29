import { FilesP } from './../m-files-p';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostRegistryP } from './../../../services.client/service.registryP';
import { SweetAlertService } from 'ng2-sweetalert2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-cd',
  templateUrl: './file-cd.component.html',
  styleUrls: ['./file-cd.component.scss']
})
export class FileCDComponent implements OnInit {

  submitted = false;

  model: FilesP = new FilesP();

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryP,
    private router: Router, private http: HttpClient) { }

  registryFile(model) {
    try {
      this.postRegistry.registryFileCD(model, callback => {
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


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.registryFile(this.model);
    console.log(this.model);
  }

}
