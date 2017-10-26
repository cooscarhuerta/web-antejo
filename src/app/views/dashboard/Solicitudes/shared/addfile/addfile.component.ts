import { DeleteFileService } from './../delete-app-file/delete-file.service';
import { downloadUrl } from './../../../../shared/api-routes/api-routes.service';
import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from '../../../Client/shared/services.client/service.registryP';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  providers: [DeleteFileService],
  styleUrls: ['./addfile.component.scss']
})


export class AddFileComponent implements OnInit {
  downloadUrl: string;
  @Input()
  public fileDescriptor: String;
  @Input()
  public fileArray: any[];
  @Input()
  public parentComponent: string;
  @Output()
  public fileEmitter: EventEmitter<File>;
  file: File;
  constructor(private clientService: PostRegistryP, private appService: DeleteFileService, private sweetAlert: SweetAlertService) {
    this.fileEmitter = new EventEmitter<File>();
  }

  ngOnInit() {
    this.file = null;
    this.downloadUrl = downloadUrl;
  }

  emitFile() {
    this.fileEmitter.emit(this.file);

  }
  getFiles(event) {
    this.file = event.target.files[0];
  }

  onDelete(item) {
    this.sweetAlert.swal({
      title: '¿Seguro que deseas eliminar?',
      text: 'No podras recuperar los datos',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((isConfirm) => {
      if (isConfirm) {
        if (this.parentComponent === 'Client') {
          this.clientService.deleteFile(item, callback => {
            if (!callback) {
              this.sweetAlert.swal('Aviso', 'Archivo Eliminado', 'success');
              for (let i = 0; i < this.fileArray.length; i++) {
                if (this.fileArray[i].id == item.id) {
                  this.fileArray.splice(i, 1);
                }
              }
            } else {
              this.sweetAlert.swal('Error', 'Error al eliminar archivo.', 'error');
            }
          });
        }else {
          this.appService.deleteFile(item, callback => {
            if (!callback) {
              this.sweetAlert.swal('Aviso', 'Archivo Eliminado', 'success');
              for (let i = 0; i < this.fileArray.length; i++) {
                if (this.fileArray[i].id == item.id) {
                  this.fileArray.splice(i, 1);
                }
              }
            } else {
              this.sweetAlert.swal('Error', 'Error al eliminar archivo.', 'error');
            }
          });
        }
      }

    }, (cancel) => {
      this.sweetAlert.swal('Aviso', 'No se elimino el archivo.', 'info');
    });
  }
}
