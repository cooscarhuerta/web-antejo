import { Component, ViewEncapsulation, Input } from '@angular/core';

import { ModalComponent, DialogRef } from 'ngx-modialog';
import { DialogPreset } from 'ngx-modialog/plugins/vex';

@Component({
  selector: 'app-detal-pay-dialog',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pay-detail.component.html'
})
export class PayDetailModalComponent implements ModalComponent<DialogPreset> {
  public context: DialogPreset;
  public credit;
  public lastMove = null;
  constructor(public dialog: DialogRef<DialogPreset>) {
    this.credit = JSON.parse(localStorage.getItem('credit'));
    localStorage.removeItem('credit');
    console.log(this.credit);
    this.context = dialog.context;
  }
}
