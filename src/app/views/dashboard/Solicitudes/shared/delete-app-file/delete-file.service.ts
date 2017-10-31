import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeleteFileService {

  constructor(private http: HttpClient) { }

  public deleteFile(item, callback) {
    this.http.delete('/Clients/Solicitudes/delete/' + item.id + '/FilesApplication')
      .subscribe(res => {
        if (res['error'] === false) {
          callback(false);
        } else {
          callback(true);
        }
      });
  }
}
