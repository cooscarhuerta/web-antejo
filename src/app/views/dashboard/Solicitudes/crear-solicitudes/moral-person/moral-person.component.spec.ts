import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoralPersonComponent } from './moral-person.component';

describe('MoralPersonComponent', () => {
  let component: MoralPersonComponent;
  let fixture: ComponentFixture<MoralPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoralPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoralPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
