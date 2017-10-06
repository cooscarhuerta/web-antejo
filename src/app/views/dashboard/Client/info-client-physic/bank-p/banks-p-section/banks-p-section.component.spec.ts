import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksPSectionComponent } from './banks-p-section.component';

describe('BanksPSectionComponent', () => {
  let component: BanksPSectionComponent;
  let fixture: ComponentFixture<BanksPSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksPSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksPSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
