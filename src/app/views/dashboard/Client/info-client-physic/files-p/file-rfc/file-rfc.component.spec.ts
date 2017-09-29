import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRFCComponent } from './file-rfc.component';

describe('FileRFCComponent', () => {
  let component: FileRFCComponent;
  let fixture: ComponentFixture<FileRFCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileRFCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileRFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
