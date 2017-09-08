import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalMComponent } from './aval-m.component';

describe('AvalMComponent', () => {
  let component: AvalMComponent;
  let fixture: ComponentFixture<AvalMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
