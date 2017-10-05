import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-p',
  templateUrl: './files-p.component.html',
  styleUrls: ['./files-p.component.scss']
})
export class FilesPComponent implements OnInit {
  @Input() 
  inputFileData:Object;
  @Output()
  appDataRefresher: EventEmitter<Object>;
  constructor() { }

  ngOnInit() {
  }

}
