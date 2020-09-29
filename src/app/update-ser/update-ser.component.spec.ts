import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSerComponent } from './update-ser.component';

describe('UpdateSerComponent', () => {
  let component: UpdateSerComponent;
  let fixture: ComponentFixture<UpdateSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
