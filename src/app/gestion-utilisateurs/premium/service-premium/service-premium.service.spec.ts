import { TestBed } from '@angular/core/testing';

import { ServicePremiumService } from './service-premium.service';

describe('ServicePremiumService', () => {
  let service: ServicePremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
