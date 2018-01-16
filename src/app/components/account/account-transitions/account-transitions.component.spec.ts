import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransitionsComponent } from './account-transitions.component';

describe('AccountTransitionsComponent', () => {
  let component: AccountTransitionsComponent;
  let fixture: ComponentFixture<AccountTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
