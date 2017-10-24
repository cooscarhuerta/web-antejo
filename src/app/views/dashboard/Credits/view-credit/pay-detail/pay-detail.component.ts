import { Component, ViewEncapsulation, Input } from '@angular/core';

import { ModalComponent, DialogRef } from 'ngx-modialog';
import { DialogPreset } from 'ngx-modialog/plugins/vex';
declare var jQuery: any;

@Component({
  selector: 'app-detal-pay-dialog',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pay-detail.component.html',
  styleUrls: ['./pay-detail.component.scss']
})
export class PayDetailModalComponent implements ModalComponent<DialogPreset> {
  public context: DialogPreset;
  public credit;
  public lastMove = null;
  constructor(public dialog: DialogRef<DialogPreset>) {
    this.credit = JSON.parse(localStorage.getItem('credit'));
    localStorage.removeItem('credit');
    
    this.context = dialog.context;
  }

  closeDialog() {
    this.dialog.close();
    jQuery('body').removeClass('vex-open');
  }
}
