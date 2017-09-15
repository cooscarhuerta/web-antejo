import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClientMoralComponent } from './info-client-moral.component';

describe('InfoClientMoralComponent', () => {
  let component: InfoClientMoralComponent;
  let fixture: ComponentFixture<InfoClientMoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoClientMoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClientMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
