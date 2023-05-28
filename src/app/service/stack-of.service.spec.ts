import { TestBed } from '@angular/core/testing';

import { StackOFService } from './stack-of.service';

describe('StackOFService', () => {
  let service: StackOFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackOFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
