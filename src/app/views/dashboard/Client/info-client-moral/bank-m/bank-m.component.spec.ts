import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMComponent } from './bank-m.component';

describe('BankMComponent', () => {
  let component: BankMComponent;
  let fixture: ComponentFixture<BankMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
