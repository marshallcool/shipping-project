import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAvailableRemunerationComponent } from './account-available-remuneration.component';

describe('AccountAvailableRemunerationComponent', () => {
  let component: AccountAvailableRemunerationComponent;
  let fixture: ComponentFixture<AccountAvailableRemunerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAvailableRemunerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAvailableRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
