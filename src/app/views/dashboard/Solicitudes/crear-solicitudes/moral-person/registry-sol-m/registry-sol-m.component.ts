import { SolicitudM } from './m-registry-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry-sol-m',
  templateUrl: './registry-sol-m.component.html',
  styleUrls: ['./registry-sol-m.component.scss']
})
export class RegistrySolMComponent implements OnInit {

    submitted = false;

  model: SolicitudM = new SolicitudM();


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
