import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersSectionComponent } from './managers-section.component';

describe('ManagersSectionComponent', () => {
  let component: ManagersSectionComponent;
  let fixture: ComponentFixture<ManagersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
