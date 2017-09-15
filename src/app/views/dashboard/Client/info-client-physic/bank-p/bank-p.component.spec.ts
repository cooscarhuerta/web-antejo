import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPComponent } from './bank-p.component';

describe('BankPComponent', () => {
  let component: BankPComponent;
  let fixture: ComponentFixture<BankPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
