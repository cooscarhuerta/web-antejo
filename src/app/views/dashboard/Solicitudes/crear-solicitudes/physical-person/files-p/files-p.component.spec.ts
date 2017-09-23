import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesPComponent } from './files-p.component';

describe('FilesPComponent', () => {
  let component: FilesPComponent;
  let fixture: ComponentFixture<FilesPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
