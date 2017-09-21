import { FilesM } from './m-files-m';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-m',
  templateUrl: './files-m.component.html',
  styleUrls: ['./files-m.component.scss']
})
export class FilesMComponent implements OnInit {
submitted = false;

  model: FilesM = new FilesM();


  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
