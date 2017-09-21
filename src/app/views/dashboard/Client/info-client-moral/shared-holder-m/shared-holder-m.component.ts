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


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
