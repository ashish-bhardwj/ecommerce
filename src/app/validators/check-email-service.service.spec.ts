import { TestBed } from '@angular/core/testing';

import { CheckEmailServiceService } from './check-email-service.service';

describe('CheckEmailServiceService', () => {
  let service: CheckEmailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckEmailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
