import { TestBed } from '@angular/core/testing';

import { GestionnaireServiceService } from './gestionnaire-service.service';

describe('GestionnaireServiceService', () => {
  let service: GestionnaireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionnaireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
