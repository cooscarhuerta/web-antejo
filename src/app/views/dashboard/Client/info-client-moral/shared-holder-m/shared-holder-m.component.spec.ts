import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHolderMComponent } from './shared-holder-m.component';

describe('SharedHolderMComponent', () => {
  let component: SharedHolderMComponent;
  let fixture: ComponentFixture<SharedHolderMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHolderMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHolderMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
