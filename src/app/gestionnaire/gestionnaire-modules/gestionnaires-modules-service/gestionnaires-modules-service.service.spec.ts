import { TestBed } from '@angular/core/testing';

import { GestionnairesModulesServiceService } from './gestionnaires-modules-service.service';

describe('GestionnairesModulesServiceService', () => {
  let service: GestionnairesModulesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionnairesModulesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
