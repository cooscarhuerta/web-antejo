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
  public RFCPattern = '[A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3}';
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

  ngOnInit() {
    if (this.inputManagerArray.length > 0) {
      this.dataFinishedLoading = true;
    } else {
      this.sweetAlert.swal('Aviso', 'No cuenta con representantes registrados', 'warning');
      this.dataFinishedLoading = false;
    }
  }

  registryInfo(model) {
    this.postRegistry.registryInfoM(model, callback => {
      if (callback['error']) {
        this.sweetAlert.swal('Error', 'Error al válidar campos', 'error');
      } else {
        this.inputManagerArray = callback['managers'];
        this.inputManagerArray.forEach(item => {
          item.oldname = item.name;
          item.oldlastname = item.lastname;
              });
        this.sweetAlert.swal('Aviso', 'Información de representante agregada exitosamente.', 'success');
      }
    });
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
          this.sweetAlert.swal('Aviso', 'Identificación agregada exitosamente.', 'success');
          this.fileId = data['file']['id'];
          this.managerModel['idfile'] = this.fileId;
          
          this.registryInfo(this.managerModel);
        } else {
          this.sweetAlert.swal('Error', 'Error al válidar campos', 'error');
        }
      });
    } catch (Exp) {

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
