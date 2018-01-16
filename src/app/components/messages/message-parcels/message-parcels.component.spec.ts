import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageParcelsComponent } from './message-parcels.component';

describe('MessageParcelsComponent', () => {
  let component: MessageParcelsComponent;
  let fixture: ComponentFixture<MessageParcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageParcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
