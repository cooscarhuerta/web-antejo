import { SweetAlertService } from 'ng2-sweetalert2';
import { WindowRefService } from './../../../shared/windowref/shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-m',
  templateUrl: './files-m.component.html',
  providers: [WindowRefService],
  styleUrls: ['./files-m.component.scss']
})
export class FilesMComponent implements OnInit {

  apiUrl = 'http://localhost:8081';
  submitted = false;
  @Input()
  inputFileData: File[];
  @Input()
  inputAppId;
  @Output()
  fileDataRefresher: EventEmitter<File>;
  model: File;
  nativeWindow: Window;
  constructor(private http: HttpClient, private windowRef: WindowRefService, private sweetAlert: SweetAlertService) {
    this.nativeWindow = windowRef.getNativeWindow();
    this.fileDataRefresher = new EventEmitter<File>();
  }
  ngOnInit() {
    console.log(this.inputAppId);
  }

  openFile(file){
    console.log(file);
    const newWindow = this.nativeWindow.open(this.apiUrl + '/storage/' + file.path);
  }
  getFile(file, type) {
    this.submitted = true;
    const formData = new FormData();
    console.log(type);
    console.log(file);
    console.log(this.inputAppId)
    formData.append('file', file);
    formData.append('type', type);
    formData.append('idapplication', this.inputAppId);
    this.http.post('/Clients/Solicitudes/add/FilesApplication', formData, {
      headers: new HttpHeaders().set('Content-type', 'multipart/form-data')
      }).subscribe(response => {
      if (response['error']) {
        this.sweetAlert.swal('Error', 'Error al conectarse con el servidor.','error');
      } else {
        this.sweetAlert.swal('Aviso', 'Archivo agregado exitosamente.','success');
        this.fileDataRefresher.emit(response['file']);
      }
    })
    
  }

}
