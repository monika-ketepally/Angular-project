import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SercomComponent } from './sercom.component';

describe('SercomComponent', () => {
  let component: SercomComponent;
  let fixture: ComponentFixture<SercomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SercomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
