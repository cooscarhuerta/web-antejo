import { SweetAlertService } from 'ng2-sweetalert2';
import { PostRegistryP } from '../../services.client/service.registryP';

import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BanksP } from './BanksP';
import { BankP } from './m-bank-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-p',
  templateUrl: './bank-p.component.html',
  styleUrls: ['./bank-p.component.scss']
})
export class BankPComponent implements OnInit {
  submitted = false;

  model: BankP = new BankP();
  modelBancos: BanksP[] = [];

  constructor(private sweetAlert: SweetAlertService, private postRegistry: PostRegistryP,
    private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.showBancos();
  }

  showBancos() {
    this.http.get('/Clients/Clientes/all/Bancos')
      .subscribe(res => {
        this.modelBancos = res['banks']
        this.model.idbank = this.modelBancos[0].id;
      });
  }

  registryBank(model) {
    try {
      this.postRegistry.registryBank(model, callback => {
        if (!callback) {
          this.sweetAlert.swal('Aviso', 'Informacion de banco agregada exitosamente.', 'success');
        } else {
          this.sweetAlert.swal('Error', 'Error al validar campos', 'error');
        }
      });
    } catch (Exp) {
      console.log(Exp)
    }
  }

  change(b) {
    this.model.idbank = b
  }

  onSubmit() {
    this.submitted = true;
    this.registryBank(this.model);
    console.log(this.model)
  }


}

