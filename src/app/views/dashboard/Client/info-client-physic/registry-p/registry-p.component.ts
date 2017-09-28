import { PostRegistryP } from './../../services.client/service.registryP';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistryP } from './m-registry-p';
import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';

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

  constructor(private postRegistry: PostRegistryP, private router: Router, private http: HttpClient) { }

  registryInfo(model) {
   try {
     this.postRegistry.registryInfo(model);
   } catch (Exp) {
     console.log(Exp)
   }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.registryInfo(this.model);
  }
}
