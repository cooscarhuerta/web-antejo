import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrySolPComponent } from './registry-sol-p.component';

describe('RegistrySolPComponent', () => {
  let component: RegistrySolPComponent;
  let fixture: ComponentFixture<RegistrySolPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrySolPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrySolPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
