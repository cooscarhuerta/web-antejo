import { PostRegistryM } from 'app/views/dashboard/Client/services.client/service.registryM';
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


  constructor(private postRegistry: PostRegistryM, private router: Router, private http: HttpClient) { }

  registryInfo(model) {
    try {
      this.postRegistry.registryInfoM(model);
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
