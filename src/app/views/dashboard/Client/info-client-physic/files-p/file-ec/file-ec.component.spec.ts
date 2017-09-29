import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileECComponent } from './file-ec.component';

describe('FileECComponent', () => {
  let component: FileECComponent;
  let fixture: ComponentFixture<FileECComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileECComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
