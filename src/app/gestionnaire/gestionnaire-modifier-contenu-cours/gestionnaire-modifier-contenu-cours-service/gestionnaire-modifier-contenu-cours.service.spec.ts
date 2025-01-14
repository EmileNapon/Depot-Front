import { TestBed } from '@angular/core/testing';

import { GestionnaireModifierContenuCoursService } from './gestionnaire-modifier-contenu-cours.service';

describe('GestionnaireModifierContenuCoursService', () => {
  let service: GestionnaireModifierContenuCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionnaireModifierContenuCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
