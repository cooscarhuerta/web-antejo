import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  selector: 'app-ver-solicitudes',
  templateUrl: './ver-solicitudes.component.html',
  providers: [SweetAlertService],
  styleUrls: ['./ver-solicitudes.component.scss']
})
export class VerSolicitudesComponent implements OnInit {
  appsArray = [];
  dataFinishedLoading = false;
  constructor(private route: Router, private http: HttpClient, private sweetAlert: SweetAlertService) {

  }

  ngOnInit() {
    this.http.get(
      '/Clients/Clientes/show/' + localStorage.getItem('idClient') + '/Wallet').subscribe(data => {
    // Read the result field from the JSON response.
    if (data['applications'].length === 0) {
      console.log('Applications query failed');
      this.sweetAlert.swal('Aviso', 'No tiene aplicaciones registradas.', 'warning');
      this.dataFinishedLoading = true;

        } else {
          this.appsArray = data['applications'];
          this.dataFinishedLoading = true;
        }
      });
  }
}
