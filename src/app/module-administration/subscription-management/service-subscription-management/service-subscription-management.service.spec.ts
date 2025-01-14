import { TestBed } from '@angular/core/testing';

import { ServiceSubscriptionManagementService } from './service-subscription-management.service';

describe('ServiceSubscriptionManagementService', () => {
  let service: ServiceSubscriptionManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSubscriptionManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
