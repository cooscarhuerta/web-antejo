import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerM } from './m-manager-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managers-m',
  templateUrl: './managers-m.component.html',
  styleUrls: ['./managers-m.component.scss']
})
export class ManagersMComponent implements OnInit {
submitted = false;

  model: ManagerM = new ManagerM();


  constructor(private router: Router, private http: HttpClient) { }

RegistryInfo(model): void {
    this.http.post('http://192.168.1.191:81/Clients/Clientes/add/Managers', model,
      {
        headers: new HttpHeaders().set('Content-type', 'application/json')
      }).subscribe(data => {
        // Read the result field from the JSON response.

      });
  }
  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.RegistryInfo(this.model);
    console.log(this.model);
  }
}
