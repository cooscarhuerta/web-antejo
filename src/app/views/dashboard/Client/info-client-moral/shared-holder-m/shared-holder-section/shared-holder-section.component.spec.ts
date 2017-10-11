import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHolderSectionComponent } from './shared-holder-section.component';

describe('SharedHolderSectionComponent', () => {
  let component: SharedHolderSectionComponent;
  let fixture: ComponentFixture<SharedHolderSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHolderSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHolderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
