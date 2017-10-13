import { urlDownload } from './../../../../../pages/login/login.interceptor';
import { PostRegistryM } from './../../../services.client/service.registryM';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './../m-manager-m';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-managers-section',
  templateUrl: './managers-section.component.html',
  styleUrls: ['./managers-section.component.scss']
})
export class ManagersSectionComponent implements OnInit {
  public urlDownload = urlDownload;
  submitted = false
  managersArray = [];
  dataFinishedLoading = false;
  model: ManagerM = new ManagerM();
  name: string[] = [];

  constructor(private postRegistry: PostRegistryM, private route: Router, private http: HttpClient,
    private sweetAlert: SweetAlertService) {
  }

  ngOnInit() {
    try {
      this.postRegistry.showManager(callback => {
        if (!callback) {
          console.log(this.managersArray);
          this.managersArray = this.postRegistry.managersArray
          this.name = this.postRegistry.name;
          this.dataFinishedLoading = this.postRegistry.dataFinishedLoading;
        } else {
          this.sweetAlert.swal('Aviso', 'No tiene representantes registrados.', 'warning');
        }
      });
    } catch (Exp) {
      console.log(Exp);
    }
  }


  }

