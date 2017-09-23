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


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
