import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingFormComponent } from './tracking-form.component';

describe('TrackingFormComponent', () => {
  let component: TrackingFormComponent;
  let fixture: ComponentFixture<TrackingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
