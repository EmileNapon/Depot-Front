import { TestBed } from '@angular/core/testing';

import { ServiceContentManagementService } from './service-content-management.service';

describe('ServiceContentManagementService', () => {
  let service: ServiceContentManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceContentManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
