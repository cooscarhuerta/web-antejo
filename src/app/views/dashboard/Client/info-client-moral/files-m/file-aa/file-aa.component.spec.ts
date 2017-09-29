import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAAComponent } from './file-aa.component';

describe('FileAAComponent', () => {
  let component: FileAAComponent;
  let fixture: ComponentFixture<FileAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
