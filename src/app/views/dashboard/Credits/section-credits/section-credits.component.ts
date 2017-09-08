import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-credits',
  templateUrl: './section-credits.component.html',
  styleUrls: ['./section-credits.component.scss']
})
export class SectionCreditsComponent implements OnInit {

  public isCollapsed = false;
  @Input() creditType  = 'DEFAULT'
  ngOnInit(): void {

  }

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }

}
