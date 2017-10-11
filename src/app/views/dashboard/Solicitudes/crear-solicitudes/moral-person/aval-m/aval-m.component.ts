import { Regex } from './../../../shared/regex';
import { PatternValidator } from '@angular/forms';
import { SweetAlertService } from 'ng2-sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Aval } from './../../../shared/applications-model';
import { AvalM } from './m-aval-m';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aval-m',
  templateUrl: './aval-m.component.html',
  providers: [SweetAlertService, PatternValidator, Regex],
  styleUrls: ['./aval-m.component.scss']
})
export class AvalMComponent implements OnInit {


  submitted: boolean;
  @Input()
  inputAvalData: Aval[];
  @Input()
  inputAppId;
  @Output()
  avalDataRefresher: EventEmitter<Aval>;
  model: Aval;
  public avals: Array<Aval>;
  public appId;
  public typeGuarantee: String;
  public method;
  public dataFinishedLoading = true;
  @ViewChild('registerTabSpan')
  avalTab: ElementRef;
  constructor(private http: HttpClient, private sweetAlert: SweetAlertService, private regex: Regex) {
    this.avalDataRefresher = new EventEmitter<Aval>();
  }
  openAval(aval: Aval) {
    this.avalTab.nativeElement.click();
    this.submitted = false;
    this.model = aval;
    this.typeGuarantee = this.model.typeguarantee;
  }
  prepareModel() {
    this.submitted = false;
    this.typeGuarantee = null;
    this.model = new Aval;
    this.model.idapplication = this.appId;
  }
  assignTypeGuarantee(typeGuarantee) {
    this.typeGuarantee = typeGuarantee;
    this.model.typeguarantee = typeGuarantee;
  }
  ngOnInit() {
    this.appId = this.inputAppId;
    this.typeGuarantee = null;
    this.model = new Aval;
    this.model.idapplication = this.appId;
    this.method = null;
  }
  getFile(event){
    console.log(event);
  }
  updateBank(bank, callback) {
    this.http.put('/Clients/Clientes/update/' + localStorage.getItem('idClient') + '/BancosClientes', bank)
      .subscribe(res => {
        if (res['error'] === true) {
          callback(true);
        } else {
          callback(false);
        }
      });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    if (this.method !== 'POST' && this.method !== 'PUT') {
      return;
    }
    this.dataFinishedLoading = false;
    if (this.method === 'POST') {
      this.http.post('/Clients/Solicitudes/add/AvalCredito', this.model).subscribe(response => {
        this.dataFinishedLoading = true;
        if (response['error']) {
          this.submitted = false;
          this.sweetAlert.swal('Error', 'No se pudo establecer conexion al servidor', 'error');
        } else {
          this.sweetAlert.swal('Aviso', 'Aval agregado correctamente', 'success');
          this.submitted = true;
          this.typeGuarantee = null;
          this.model.id = response['id'];
          this.avalDataRefresher.emit(this.model);
          this.model = new Aval();
        }
      })
    }
    if (this.method === 'PUT') {
      this.http.put('/Clients/Solicitudes/update/' + this.model.id + '/AvalCredito', this.model).subscribe(response => {
        this.dataFinishedLoading = true;
        if (response['error']) {
          this.sweetAlert.swal('Error', 'No se pudo establecer conexion al servidor', 'error');
          this.submitted = false;
        } else {
          this.sweetAlert.swal('Aviso', 'Aval agregado correctamente', 'success');
          this.typeGuarantee = null;
          this.avalDataRefresher.emit(this.model);
        }
      })
    }

  }

}
