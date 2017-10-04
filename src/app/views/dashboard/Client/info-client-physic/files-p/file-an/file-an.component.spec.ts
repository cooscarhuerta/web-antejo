import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileANComponent } from './file-an.component';

describe('FileANComponent', () => {
  let component: FileANComponent;
  let fixture: ComponentFixture<FileANComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileANComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
