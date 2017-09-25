import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistryP } from './m-registry-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry-p',
  templateUrl: './registry-p.component.html',
  styleUrls: ['./registry-p.component.scss']
})
export class RegistryPComponent implements OnInit {
  submitted = false;
  model: RegistryP = new RegistryP();

  constructor(private router: Router, private http: HttpClient) { }

  RegistryInfo(model): void {
    this.http.post('http://localhost/bantejo/public/Clients/Clientes/add', model,
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
