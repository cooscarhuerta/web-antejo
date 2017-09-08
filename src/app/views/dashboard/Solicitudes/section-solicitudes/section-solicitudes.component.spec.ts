import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSolicitudesComponent } from './section-solicitudes.component';

describe('SectionSolicitudesComponent', () => {
  let component: SectionSolicitudesComponent;
  let fixture: ComponentFixture<SectionSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
