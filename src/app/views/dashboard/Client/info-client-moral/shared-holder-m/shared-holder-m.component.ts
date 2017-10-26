import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryM } from 'app/views/dashboard/Client/shared/services.client/service.registryM';
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
  public RFCPattern = '[A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3}';
  @Input()
  public inputSharedArray: Array<SharedholderM>;

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryM, private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    if (this.inputSharedArray.length > 0) {
      this.dataFinishedLoading = true;
    } else {
      this.sweetAlert.swal('Aviso', 'No cuenta con accionistas registrados', 'warning');
      this.dataFinishedLoading = false;
    }
  }

  registryInfo(model) {
    this.postRegistry.registryInfoSH(model, callback => {
      if (callback['error']) {
        this.sweetAlert.swal('Error', 'Error al válidar campos', 'error');
      } else {
       this.inputSharedArray = callback['shareholders']
       this.inputSharedArray.forEach(item => {
        item.oldname = item.name;
        item.oldlastname = item.lastname;
            });
        this.sweetAlert.swal('Aviso', 'Información de accionista agregada exitosamente.', 'success');
        }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.registryInfo(this.sharedModel);
  }
}

