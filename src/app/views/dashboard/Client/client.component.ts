import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})
export class ClientComponent implements OnInit {
  public cliente_moral: boolean;

  constructor() {
    this.cliente_moral = false;
  }

  evento_cliente(valor) {
    this.cliente_moral = valor
  }
  ngOnInit() {

  }


}
