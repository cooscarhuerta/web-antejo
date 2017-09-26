import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ver-solicitudes',
  templateUrl: './ver-solicitudes.component.html',
  styleUrls: ['./ver-solicitudes.component.scss']
})
export class VerSolicitudesComponent implements OnInit {
  appsArray = ['1', '2', '3'];
  dataFinishedLoading = false;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(
      'http://192.168.1.191/Clientes/show/' + 1 + '/Wallet').subscribe(data => {
    // Read the result field from the JSON response.
    if (data['error'] === true) {
      console.log('Applications query failed');

    }else {
      console.log(data['applications']);
      this.appsArray = data['applications'];
      console.log('Applications get!');
      this.dataFinishedLoading = true;
    }
    console.log(data);
    });
  }

}
