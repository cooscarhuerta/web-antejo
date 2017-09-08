import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalPComponent } from './aval-p.component';

describe('AvalPComponent', () => {
  let component: AvalPComponent;
  let fixture: ComponentFixture<AvalPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
