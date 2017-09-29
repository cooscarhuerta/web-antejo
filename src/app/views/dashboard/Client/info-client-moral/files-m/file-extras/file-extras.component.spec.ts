import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExtrasComponent } from './file-extras.component';

describe('FileExtrasComponent', () => {
  let component: FileExtrasComponent;
  let fixture: ComponentFixture<FileExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
