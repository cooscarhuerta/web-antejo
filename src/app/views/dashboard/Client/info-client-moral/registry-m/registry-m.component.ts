import { RegistryM } from './m-registry-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry-m',
  templateUrl: './registry-m.component.html',
  styleUrls: ['./registry-m.component.scss']
})
export class RegistryMComponent implements OnInit {

  submitted = false;

  model: RegistryM = new RegistryM();


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
