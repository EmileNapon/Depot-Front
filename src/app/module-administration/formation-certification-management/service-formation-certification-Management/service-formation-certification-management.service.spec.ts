import { TestBed } from '@angular/core/testing';

import { ServiceFormationCertificationManagementService } from './service-formation-certification-management.service';

describe('ServiceFormationCertificationManagementService', () => {
  let service: ServiceFormationCertificationManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFormationCertificationManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
