import { apiUrl } from './../../../../shared/api-routes/api-routes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';
import { WindowRefService } from './../../../Solicitudes/shared/windowref/shared.service';
import { File } from './file';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface FileType {
  fileDescriptor: string,
  fileType: string
}
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  providers: [WindowRefService, SweetAlertService],
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  submitted = false;
  idClient;
  clientType: string;
  filesArray: Array<Array<Object>>;
  @Input()
  fileTypes: Array<FileType>;
  @Input()
  inputFileData: Array<any>;
  model: File;
  nativeWindow: Window;
  public dataFinishedLoading = true;
  constructor(private http: HttpClient,
    private windowRef: WindowRefService, private sweetAlert: SweetAlertService) {
    this.nativeWindow = windowRef.getNativeWindow();
  }
  ngOnInit() {
    this.filesArray = [];
    this.idClient = localStorage.getItem('idClient');
    this.listaArchivos();
  }

  openFile(file) {
    console.log(apiUrl);
    console.log(file.path);
    const newWindow = this.nativeWindow.open(apiUrl + '/storage/' + file.path);
  }

  getFile(file, type) {
    this.dataFinishedLoading = false;
    this.submitted = true;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    formData.append('idclient', this.idClient);
    this.http.post('/Clients/Clientes/add/FilesClient', formData, {
      headers: new HttpHeaders().set('Content-type', 'multipart/form-data')
    }).subscribe(response => {
      this.dataFinishedLoading = true;
      if (response['error']) {
        this.sweetAlert.swal('Error', 'Error al conectarse con el servidor.', 'error');
      } else {
        this.sweetAlert.swal('Aviso', 'Archivo agregado exitosamente.', 'success');

        for (let i = 0; i < this.fileTypes.length; i++) {
          if (this.fileTypes[i].fileType === type) {
            this.filesArray[i].push(response['file']);
            break;
          }
        }
      }
    })
  }

  listaArchivos() {
    for (let i = 0; i < this.fileTypes.length; i++) {
      const file: FileType = this.fileTypes[i];
      this.filesArray.push(this.inputFileData.filter(item => {
        return item.type === file.fileType;
      }));
    }
  }
}
