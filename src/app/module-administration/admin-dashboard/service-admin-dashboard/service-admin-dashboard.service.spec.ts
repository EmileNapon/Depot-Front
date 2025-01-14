import { TestBed } from '@angular/core/testing';

import { ServiceAdminDashboardService } from './service-admin-dashboard.service';

describe('ServiceAdminDashboardService', () => {
  let service: ServiceAdminDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
