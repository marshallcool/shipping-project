import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePageInputComponent } from './message-page-input.component';

describe('MessagePageInputComponent', () => {
  let component: MessagePageInputComponent;
  let fixture: ComponentFixture<MessagePageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePageInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
