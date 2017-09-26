import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistryP } from './m-registry-p';
import { Component, OnInit } from '@angular/core';
import { PatternValidator} from '@angular/forms';

@Component({
  selector: 'app-registry-p',
  templateUrl: './registry-p.component.html',
  providers: [PatternValidator],
  styleUrls: ['./registry-p.component.scss']
})
export class RegistryPComponent implements OnInit {
  submitted = false;
  model: RegistryP = new RegistryP();
  public phonePattern = '[0-9]{1,10}';

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
