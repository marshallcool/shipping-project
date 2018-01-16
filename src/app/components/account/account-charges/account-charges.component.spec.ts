import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChargesComponent } from './account-charges.component';

describe('AccountChargesComponent', () => {
  let component: AccountChargesComponent;
  let fixture: ComponentFixture<AccountChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
