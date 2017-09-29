import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileACComponent } from './file-ac.component';

describe('FileACComponent', () => {
  let component: FileACComponent;
  let fixture: ComponentFixture<FileACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
