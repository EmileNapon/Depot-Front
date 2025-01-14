import { TestBed } from '@angular/core/testing';

import { ServiceForgotPasswordService } from './service-forgot-password.service';

describe('ServiceForgotPasswordService', () => {
  let service: ServiceForgotPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForgotPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
