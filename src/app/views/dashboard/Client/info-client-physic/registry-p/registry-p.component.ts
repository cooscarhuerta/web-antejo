import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from './../../services.client/service.registryP';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistryP } from './m-registry-p';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-registry-p',
  templateUrl: './registry-p.component.html',
  providers: [PatternValidator],
  styleUrls: ['./registry-p.component.scss']
})
export class RegistryPComponent implements OnInit {
  submitted = false; 
  @Input() client : any;
  @Output()
  idRefresher: EventEmitter<string> = new EventEmitter<string>();
  model: RegistryP = new RegistryP();
  public phonePattern = '[0-9]{1,10}';
  public RFCPattern = '[A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3}';
  public FIELPattern = '[0-9]{18}([0-9]?){2}';
  public emailPattern = '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';  
  public method :string = '';
  public idClient;
  
  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryP,
    private router: Router, private http: HttpClient) { }
  
  public registryInfo(model) {
    try {
      this.postRegistry.registryInfo(model,this.method, callback => {
        if (!callback) {
          const idClient = localStorage.getItem('idClient')
          this.idRefresher.emit(idClient);
          this.sweetAlert.swal('Aviso', 'Informacion agregada exitosamente.', 'success');
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp)
    }
  }
  public onSubmit() {
    if(this.method!=='POST' && this.method!=='PUT') return;
    this.submitted = true;
    this.registryInfo(this.model);
  }
  
  ngOnInit() {
    this.idClient = localStorage.getItem('idClient');
    if(this.client!==null){
      this.model.client = this.client;
    }
    
  }

  
}
