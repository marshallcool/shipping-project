import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageForwardingComponent } from './message-forwarding.component';

describe('MessageForwardingComponent', () => {
  let component: MessageForwardingComponent;
  let fixture: ComponentFixture<MessageForwardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageForwardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageForwardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
