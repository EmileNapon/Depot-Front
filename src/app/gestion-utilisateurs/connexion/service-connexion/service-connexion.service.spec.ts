import { TestBed } from '@angular/core/testing';

import { ServiceConnexionService } from './service-connexion.service';

describe('ServiceConnexionService', () => {
  let service: ServiceConnexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConnexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
