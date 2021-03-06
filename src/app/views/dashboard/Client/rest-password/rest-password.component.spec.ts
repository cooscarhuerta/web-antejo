import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPasswordComponent } from './rest-password.component';

describe('RestPasswordComponent', () => {
  let component: RestPasswordComponent;
  let fixture: ComponentFixture<RestPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
