import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';
import { WindowRefService } from './../../../Solicitudes/shared/windowref/shared.service';
import { FilesP } from './m-files-p';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-p',
  templateUrl: './files-p.component.html',
  providers: [WindowRefService, SweetAlertService],
  styleUrls: ['./files-p.component.scss']
})
export class FilesPComponent implements OnInit {
  apiUrl = 'http://localhost:8081';
  submitted = false;
  idClient;
  @Input()
  inputFileData: File[];
  @Output()
  fileDataRefresher: EventEmitter<File>;
  model: File;
  nativeWindow: Window;
  public dataFinishedLoading = true;
  constructor(private http: HttpClient, private windowRef: WindowRefService, private sweetAlert: SweetAlertService) {
    this.nativeWindow = windowRef.getNativeWindow();
    this.fileDataRefresher = new EventEmitter<File>();
  }
  ngOnInit() {
    this.idClient = localStorage.getItem('idClient');
  }

  openFile(file) {
    console.log(file);
    const newWindow = this.nativeWindow.open(this.apiUrl + '/storage/' + file.path);
  }
  getFile(file, type) {
    this.dataFinishedLoading = false;
    this.submitted = true;
    const formData = new FormData();
    console.log(type);
    console.log(file);
    console.log(this.idClient);
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
        this.fileDataRefresher.emit(response['file']);
      }
    })

  }
}
