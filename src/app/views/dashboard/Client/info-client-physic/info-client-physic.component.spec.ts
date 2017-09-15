import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClientPhysicComponent } from './info-client-physic.component';

describe('InfoClientPhysicComponent', () => {
  let component: InfoClientPhysicComponent;
  let fixture: ComponentFixture<InfoClientPhysicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClientPhysicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClientPhysicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
