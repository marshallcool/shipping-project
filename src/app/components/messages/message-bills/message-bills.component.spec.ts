import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBillsComponent } from './message-bills.component';

describe('MessageBillsComponent', () => {
  let component: MessageBillsComponent;
  let fixture: ComponentFixture<MessageBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
