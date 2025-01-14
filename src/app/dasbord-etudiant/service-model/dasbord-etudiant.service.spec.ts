import { TestBed } from '@angular/core/testing';

import { DasbordEtudiantService } from '../dasbord-etudiant.service';

describe('DasbordEtudiantService', () => {
  let service: DasbordEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DasbordEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
