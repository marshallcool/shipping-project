import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingInStockComponent } from './forwarding-in-stock.component';

describe('ForwardingInStockComponent', () => {
  let component: ForwardingInStockComponent;
  let fixture: ComponentFixture<ForwardingInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardingInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardingInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
