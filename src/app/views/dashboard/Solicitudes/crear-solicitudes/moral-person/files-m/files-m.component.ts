import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-m',
  templateUrl: './files-m.component.html',
  styleUrls: ['./files-m.component.scss']
})
export class FilesMComponent implements OnInit {

  submitted = false;
  @Input()
  inputFileData: File[];
  @Input()
  inputAppId;
  @Output()
  fileDataRefresher: EventEmitter<File>;
  model: File;
  constructor() {
    this.fileDataRefresher = new EventEmitter<File>();
   }
  ngOnInit() {
    this.model = this.inputFileData[0];
  }

  getFile(file,type) {
    this.submitted = true;
    console.log(type);
    console.log(file);
    this.fileDataRefresher.emit(this.model);
  }

}
