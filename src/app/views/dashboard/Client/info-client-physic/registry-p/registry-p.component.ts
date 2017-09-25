import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistryP } from './m-registry-p';
import { Component, OnInit } from '@angular/core';
import { PatternValidator} from '@angular/forms';

@Component({
  selector: 'app-registry-p',
  templateUrl: './registry-p.component.html',
  providers: [PatternValidator],
  styleUrls: ['./registry-p.component.scss']
})
export class RegistryPComponent implements OnInit {

  submitted = false;

  model: RegistryP = new RegistryP();

  public RFCPattern = '[A-Z,Ñ,&]{4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3}';
  public FIELPattern = '[0-9]{18}([0-9]?){2}';
  public emailPattern = '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';
  public phonePattern = '[0-9]{1,10}';
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
}
