import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from '../../../Client/shared/services.client/service.registryP';
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
  }

  emitFile() {
    this.fileEmitter.emit(this.file);

  }
  getFiles(event) {
    this.file = event.target.files[0];
  }

  onDelete(item) {
    this.service.deleteFile(item, callback => {
      if (!callback) {
        this.sweetAlert.swal('Error', 'Archivo Eliminado', 'success');
        for (let i = 0; i < this.fileArray.length; i++) {
          if (this.fileArray[i].id == item.id) {
            this.fileArray.splice(i, 1);
          }
        }
      } else {
        this.sweetAlert.swal('Aviso', 'Error al eliminar.', 'error');
      }
    })
  }
}
