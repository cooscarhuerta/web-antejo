import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrySolMComponent } from './registry-sol-m.component';

describe('RegistrySolMComponent', () => {
  let component: RegistrySolMComponent;
  let fixture: ComponentFixture<RegistrySolMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrySolMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrySolMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
