import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.scss']
})


export class AddFileComponent implements OnInit {
  @Input()
  public fileDescriptor: String;
  @Output()
  public fileEmitter: EventEmitter<File>;
  file: File;
  constructor() {
    this.fileEmitter = new EventEmitter<File>();
  }

  ngOnInit() {
    this.file = null;
  }

  emitFile() {
    console.log("hi");
   this.fileEmitter.emit(this.file);

  }
  getFiles(event) {
    this.file = event.target.files[0];
  }
}
