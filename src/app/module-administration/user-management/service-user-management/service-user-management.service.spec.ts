import { TestBed } from '@angular/core/testing';

import { ServiceUserManagementService } from './service-user-management.service';

describe('ServiceUserManagementService', () => {
  let service: ServiceUserManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUserManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
