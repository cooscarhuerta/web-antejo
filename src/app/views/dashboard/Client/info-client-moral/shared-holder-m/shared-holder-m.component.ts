import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedholderM } from './m-shared-holder-m';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-holder-m',
  templateUrl: './shared-holder-m.component.html',
  providers: [PostRegistryM],
  styleUrls: ['./shared-holder-m.component.scss']
})
export class SharedHolderMComponent implements OnInit {
  submitted = false;
  dataFinishedLoading = false;
  sharedModel: SharedholderM = new SharedholderM();
  sharedArray: SharedholderM[];
  @Input()
  public inputSharedArray: SharedholderM[];

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM, private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.sharedArray = this.inputSharedArray;
    if (this.sharedArray.length > 0) {
      this.dataFinishedLoading = true;
    } else {
      this.dataFinishedLoading = false;
    }
  }

  registryInfo(model) {
    return new Promise<SharedholderM>((resolve, reject) => {
      this.postRegistry.registryInfoSH(model, response => {
        if (!response['error']) {
          this.sweetAlert.swal('Aviso', 'Informacion de la cuenta de banco agregada exitosamente.', 'success');
          model['id'] = response['id']
          this.sharedArray.push(model);
          return resolve(response['clientshared']);
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
          return reject();
        }
      });
    })
  }

  onSubmit() {
    this.submitted = true;
    this.registryInfo(this.sharedModel);
  }
}

