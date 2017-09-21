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
      'http://localhost:8081/Clients/Clientes/show/'+1+'/Wallet',
      {
        headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('token','QEbKd4UqLpazbnOeLU46YsmOXL1KAfMGHamDQqTxrnXgWZnaMQmCTbVyj5I7')
      }).subscribe(data => {
    // Read the result field from the JSON response.
    if (data['error'] === true) {
      console.log("Applications query didn't work");

    }else {
      console.log(data['applications']);
      this.appsArray = data['applications'];
      console.log("Applications get!");
      this.dataFinishedLoading = true;
    }
    console.log(data);
    });
  }

}
