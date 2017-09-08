import { SectionCreditsComponent } from './section-credits/section-credits.component';
import { Component } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';


@Component({
  selector: 'app-creditos',
  styleUrls: ['./section-credits/section-credits.component.scss'],
  templateUrl: 'view.component.html',
  providers: [SweetAlertService]
})


export class ViewAppComponent {
 strArray = ['Credito 1', 'Credito 2', 'Credito  3'];
}
