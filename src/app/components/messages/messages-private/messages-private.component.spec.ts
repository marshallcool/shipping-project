import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPrivateComponent } from './messages-private.component';

describe('MessagesPrivateComponent', () => {
  let component: MessagesPrivateComponent;
  let fixture: ComponentFixture<MessagesPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
