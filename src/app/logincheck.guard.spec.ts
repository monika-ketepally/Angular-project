import { TestBed } from '@angular/core/testing';

import { LogincheckGuard } from './logincheck.guard';

describe('LogincheckGuard', () => {
  let guard: LogincheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogincheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
