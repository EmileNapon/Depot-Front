import { TestBed } from '@angular/core/testing';

import { ServiceStagePlacementService } from './service-stage-placement.service';

describe('ServiceStagePlacementService', () => {
  let service: ServiceStagePlacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStagePlacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
