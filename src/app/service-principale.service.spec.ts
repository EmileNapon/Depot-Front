import { TestBed } from '@angular/core/testing';

import { ServicePrincipaleService } from './service-connexion-etudiant-principale.service';

describe('ServicePrincipaleService', () => {
  let service: ServicePrincipaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePrincipaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
