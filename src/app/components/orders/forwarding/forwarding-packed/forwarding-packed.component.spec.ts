import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingExpectReceiptComponent } from './forwarding-packed.component';

describe('ForwardingExpectReceiptComponent', () => {
  let component: ForwardingExpectReceiptComponent;
  let fixture: ComponentFixture<ForwardingExpectReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardingExpectReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardingExpectReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
