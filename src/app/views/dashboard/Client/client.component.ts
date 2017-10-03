import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})

export class ClientComponent implements OnInit {
  public isMoral: boolean;
  @Output() public idClient;
  public clientType;
  public client;
  constructor(private http: HttpClient) {

  }
  refreshId(event){
    console.log("Raising output in client component");
    this.idClient = event;
  }
  evento_cliente(isMoral) {
    this.clientType = isMoral? "moral" : "physical";
  }
  ngOnInit() {
    this.client = null;
    this.clientType = null;
    this.idClient = localStorage.getItem('idClient');
    this.http.get('/Clients/Clientes/show/'+localStorage.getItem('idClient')).subscribe(res=>{
      if(res['error']===false){
        this.client = res['client'];
        if(this.client.businessname === null){
          this.clientType = "physical";
        }else{
          this.clientType = "moral";
        }
        
      }
    });
  }
}
