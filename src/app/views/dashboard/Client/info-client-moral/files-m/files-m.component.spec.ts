import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMComponent } from './files-m.component';

describe('FilesMComponent', () => {
  let component: FilesMComponent;
  let fixture: ComponentFixture<FilesMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
