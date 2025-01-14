import { TestBed } from '@angular/core/testing';

import { GestionnaireChapitreServiceService } from './gestionnaire-chapitre-service.service';

describe('GestionnaireChapitreServiceService', () => {
  let service: GestionnaireChapitreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionnaireChapitreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
