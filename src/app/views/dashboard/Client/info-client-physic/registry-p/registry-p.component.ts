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


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
