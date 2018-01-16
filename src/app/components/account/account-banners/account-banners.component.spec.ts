import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBannersComponent } from './account-banners.component';

describe('AccountBannersComponent', () => {
  let component: AccountBannersComponent;
  let fixture: ComponentFixture<AccountBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
