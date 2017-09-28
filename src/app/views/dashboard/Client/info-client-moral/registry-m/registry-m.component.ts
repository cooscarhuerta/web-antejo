import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegistryM } from './m-registry-m';
import { Component, OnInit } from '@angular/core';

import { PatternValidator} from '@angular/forms';

@Component({
  selector: 'app-registry-m',
  templateUrl: './registry-m.component.html',
  providers: [PatternValidator],
  styleUrls: ['./registry-m.component.scss']
})
export class RegistryMComponent implements OnInit {

  submitted = false;
  model: RegistryM = new RegistryM();


  constructor(private router: Router, private http: HttpClient) { }

RegistryInfo(model): void {
    this.http.post('http://192.168.1.191:81/Clients/Clientes/add', model,
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
