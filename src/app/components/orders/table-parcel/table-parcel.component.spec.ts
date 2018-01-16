import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParcelComponent } from './table-parcel.component';

describe('TableParcelComponent', () => {
  let component: TableParcelComponent;
  let fixture: ComponentFixture<TableParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
