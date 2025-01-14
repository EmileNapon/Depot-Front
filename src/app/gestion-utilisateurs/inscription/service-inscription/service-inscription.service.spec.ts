import { TestBed } from '@angular/core/testing';

import { ServiceInscriptionService } from './service-inscription.service';

describe('ServiceInscriptionService', () => {
  let service: ServiceInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
