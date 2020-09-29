import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustComponent } from './updatecust.component';

describe('UpdatecustComponent', () => {
  let component: UpdatecustComponent;
  let fixture: ComponentFixture<UpdatecustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
