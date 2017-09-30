import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})
export class ClientComponent implements OnInit {
  public isMoral: boolean;
  public clientId = localStorage.getItem('idClient');
  public clientType = localStorage.getItem('clientType');
  constructor() {

  }

  evento_cliente(isMoral) {
    this.clientType = isMoral? "moral" : "physical";
  }
  ngOnInit() {

  }


}
