import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-client',
  styleUrls: ['./client.component.scss'],
  templateUrl: 'client.component.html'
})

export class ClientComponent implements OnInit {
  public dataFinishedLoading: boolean;
  public isMoral: boolean;
  @Output() public idClient;
  public clientType;
  public client;
  constructor(private http: HttpClient) {

  }
  refreshId(event) {

    this.idClient = event;
  }
  evento_cliente(isMoral) {
    this.clientType = isMoral ? 'Moral' : 'Fisica';
  }
  ngOnInit() {
    this.dataFinishedLoading = true;
    this.client = null;
    this.clientType = null;
    this.idClient = localStorage.getItem('idClient');
    console.log(this.idClient);
    if (this.idClient !== null) {
      this.dataFinishedLoading = false;
      this.http.get('/Clients/Clientes/show/' + this.idClient).subscribe(res => {
        if (res['error'] === false) {
          this.client = res['client'];
          if (this.client.businessname === null) {
            this.clientType = 'Fisica';
          } else {
            this.clientType = 'Moral';
          }
          this.dataFinishedLoading = true;
        }
      });
    }
  }
}
