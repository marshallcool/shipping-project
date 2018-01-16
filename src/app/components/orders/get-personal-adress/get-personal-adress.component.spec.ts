import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonalAdressComponent } from './get-personal-adress.component';

describe('GetPersonalAdressComponent', () => {
  let component: GetPersonalAdressComponent;
  let fixture: ComponentFixture<GetPersonalAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPersonalAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPersonalAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
