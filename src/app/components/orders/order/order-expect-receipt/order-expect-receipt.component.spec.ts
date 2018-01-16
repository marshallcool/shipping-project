import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderExpectReceiptComponent } from './order-expect-receipt.component';

describe('OrderExpectReceiptComponent', () => {
  let component: OrderExpectReceiptComponent;
  let fixture: ComponentFixture<OrderExpectReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderExpectReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderExpectReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
