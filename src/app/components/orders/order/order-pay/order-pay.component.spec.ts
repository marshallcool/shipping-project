import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPayComponent } from './order-pay.component';

describe('OrderPayComponent', () => {
  let component: OrderPayComponent;
  let fixture: ComponentFixture<OrderPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
