import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderExpectPaymentComponent } from './order-expect-payment.component';

describe('OrderExpectPaymentComponent', () => {
  let component: OrderExpectPaymentComponent;
  let fixture: ComponentFixture<OrderExpectPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderExpectPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderExpectPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
