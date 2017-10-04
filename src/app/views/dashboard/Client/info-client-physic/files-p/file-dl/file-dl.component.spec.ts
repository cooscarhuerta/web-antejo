import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDLComponent } from './file-dl.component';

describe('FileDLComponent', () => {
  let component: FileDLComponent;
  let fixture: ComponentFixture<FileDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
