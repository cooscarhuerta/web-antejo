import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedholderM } from './m-shared-holder-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-holder-m',
  templateUrl: './shared-holder-m.component.html',
  styleUrls: ['./shared-holder-m.component.scss']
})
export class SharedHolderMComponent implements OnInit {
  submitted = false;

  model: SharedholderM = new SharedholderM();



  constructor(private postRegistry: PostRegistryM, private router: Router, private http: HttpClient) { }

  registryInfo(model) {
    try {
      this.postRegistry.registryInfoSH(model);
    } catch (Exp) {
      console.log(Exp);
    }
  }
  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.registryInfo(this.model);
    console.log(this.model);
  }
}

