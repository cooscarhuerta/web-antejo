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
      'http://localhost:8081/Clients/Clientes/show/' + 1 + '/Wallet',
      {
        headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('token', 'hlhgxN1Y71yUAK9wq7T0T97FViS48Cp8xy12eIQYLIXW6B4FUwGcm8L3FDiu')
      }).subscribe(data => {
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
