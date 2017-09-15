import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersMComponent } from './managers-m.component';

describe('ManagersMComponent', () => {
  let component: ManagersMComponent;
  let fixture: ComponentFixture<ManagersMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
