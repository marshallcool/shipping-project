import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOrderComponent } from './message-order.component';

describe('MessageOrderComponent', () => {
  let component: MessageOrderComponent;
  let fixture: ComponentFixture<MessageOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
