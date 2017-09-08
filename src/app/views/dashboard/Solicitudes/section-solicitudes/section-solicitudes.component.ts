import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-solicitudes',
  templateUrl: './section-solicitudes.component.html',
  styleUrls: ['./section-solicitudes.component.scss']
})
export class SectionSolicitudesComponent implements OnInit {

  public isCollapsed = false;
  @Input() creditType = 'DEFAULT'

  ngOnInit(): void {
  }

    public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }

}
