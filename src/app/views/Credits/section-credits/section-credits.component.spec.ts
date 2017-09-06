import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCreditsComponent } from './section-credits.component';

describe('SectionCreditsComponent', () => {
  let component: SectionCreditsComponent;
  let fixture: ComponentFixture<SectionCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
