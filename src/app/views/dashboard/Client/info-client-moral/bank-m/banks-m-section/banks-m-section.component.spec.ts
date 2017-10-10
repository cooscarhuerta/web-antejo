import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksMSectionComponent } from './banks-m-section.component';

describe('BanksMSectionComponent', () => {
  let component: BanksMSectionComponent;
  let fixture: ComponentFixture<BanksMSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksMSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksMSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
