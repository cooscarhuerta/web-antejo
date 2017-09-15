import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryMComponent } from './registry-m.component';

describe('RegistryMComponent', () => {
  let component: RegistryMComponent;
  let fixture: ComponentFixture<RegistryMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
