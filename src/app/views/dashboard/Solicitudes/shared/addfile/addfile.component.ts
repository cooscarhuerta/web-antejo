import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from '../../../Client/services.client/service.registryP';
import { urlDownload } from './../../../../pages/login/login.interceptor';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.scss']
})


export class AddFileComponent implements OnInit {
  public urlDownload = urlDownload;
  @Input()
  public fileDescriptor: String;
  @Input()
  public fileArray: any[];
  @Output()
  public fileEmitter: EventEmitter<File>;
  file: File;
  constructor(private service: PostRegistryP, private sweetAlert: SweetAlertService) {
    this.fileEmitter = new EventEmitter<File>();
  }

  ngOnInit() {
    this.file = null;
    console.log('aqui', this.fileArray);
  }

  emitFile() {
    console.log('hi');
   this.fileEmitter.emit(this.file);

  }
  getFiles(event) {
    this.file = event.target.files[0];
  }

  onDelete(item) {
    this.service.deleteFile(item, callback => {
      if (!callback) {
        this.sweetAlert.swal('Error', 'Archivo Eliminado', 'success');
      } else {
        this.sweetAlert.swal('Aviso', 'Error al eliminar.', 'error');
      }
    })
  }
}
