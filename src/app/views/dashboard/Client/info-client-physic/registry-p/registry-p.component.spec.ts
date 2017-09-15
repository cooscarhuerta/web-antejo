import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryPComponent } from './registry-p.component';

describe('RegistryPComponent', () => {
  let component: RegistryPComponent;
  let fixture: ComponentFixture<RegistryPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
