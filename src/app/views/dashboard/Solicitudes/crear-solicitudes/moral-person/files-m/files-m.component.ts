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
  @Output()
  fileDataRefresher: EventEmitter<File>;
  model: File;
  constructor() {
    this.fileDataRefresher = new EventEmitter<File>();
   }
  ngOnInit() {
    this.model = this.inputFileData[0];
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.fileDataRefresher.emit(this.model);
  }

}
