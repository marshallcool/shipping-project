import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInStockComponent } from './order-in-stock.component';

describe('OrderInStockComponent', () => {
  let component: OrderInStockComponent;
  let fixture: ComponentFixture<OrderInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
