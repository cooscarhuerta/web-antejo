import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCDComponent } from './file-cd.component';

describe('FileCDComponent', () => {
  let component: FileCDComponent;
  let fixture: ComponentFixture<FileCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
