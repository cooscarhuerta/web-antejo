import { SolicitudP } from './m-registry-p';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry-sol-p',
  templateUrl: './registry-sol-p.component.html',
  styleUrls: ['./registry-sol-p.component.scss']
})
export class RegistrySolPComponent implements OnInit {


  submitted = false;

  model: SolicitudP = new SolicitudP();


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
