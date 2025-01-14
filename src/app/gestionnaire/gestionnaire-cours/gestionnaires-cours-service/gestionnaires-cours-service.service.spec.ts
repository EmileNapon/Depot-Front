import { TestBed } from '@angular/core/testing';

import { GestionnairesCoursServiceService } from './gestionnaires-cours-service.service';

describe('GestionnairesCoursServiceService', () => {
  let service: GestionnairesCoursServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionnairesCoursServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
