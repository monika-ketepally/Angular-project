import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustBookingsComponent } from './cust-bookings.component';

describe('CustBookingsComponent', () => {
  let component: CustBookingsComponent;
  let fixture: ComponentFixture<CustBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
