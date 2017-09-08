import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudesComponent } from './crear-solicitudes.component';

describe('CrearSolicitudesComponent', () => {
  let component: CrearSolicitudesComponent;
  let fixture: ComponentFixture<CrearSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
