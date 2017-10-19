import { PostRegistryM } from './../../services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';
import { WindowRefService } from './../../../Solicitudes/shared/windowref/shared.service';
import { FilesM } from './m-files-m';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-m',
  templateUrl: './files-m.component.html',
  providers: [WindowRefService, SweetAlertService],
  styleUrls: ['./files-m.component.scss']
})
export class FilesMComponent implements OnInit {
  apiUrl = 'http://localhost:8081';
  submitted = false;
  idClient;
  clientType: string;
  asambleaArray = [];
  constitutiveArray = [];
  extrasArray = [];
  RFCArray = [];
  legalDocsArray = [];
  birthCertificateArray = [];
  @Input()
  fileTypes: object[];
  @Input()
  inputFileData: any[];
  @Output()
  fileDataRefresher: EventEmitter<File>;
  model: File;
  nativeWindow: Window;
  public dataFinishedLoading = true;
  constructor(private showFiles: PostRegistryM, private http: HttpClient,
    private windowRef: WindowRefService, private sweetAlert: SweetAlertService) {
    this.nativeWindow = windowRef.getNativeWindow();
    this.fileDataRefresher = new EventEmitter<File>();
  }
  ngOnInit() {
    this.idClient = localStorage.getItem('idClient');
    this.clientType = localStorage.getItem('idClient');
    this.listaArchivos();
  }

  openFile(file) {
    const newWindow = this.nativeWindow.open(this.apiUrl + '/storage/' + file.path);
  }

  getFile(file, type) {
    this.dataFinishedLoading = false;
    this.submitted = true;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    formData.append('idclient', this.idClient);
    console.log(type);
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

  listaArchivos() {
    console.log(this.legalDocsArray);
    this.asambleaArray = this.inputFileData.filter(item => {
      return item.type === 'Asamblea'
    });
    this.constitutiveArray = this.inputFileData.filter(item => {
      return item.type === 'Constitutiva'
    });
    this.extrasArray = this.inputFileData.filter(item => {
      return item.type === 'Extras'
    });
    this.RFCArray = this.inputFileData.filter(item => {
      return item.type === 'RFC'
    });
    this.birthCertificateArray = this.inputFileData.filter(item => {
      return item.type === 'Acta de Nacimiento'
    });
    this.legalDocsArray = this.inputFileData.filter(item => {
      return item.type === 'Documentacion Legal'
    });
    console.log(this.legalDocsArray);
  }

}
