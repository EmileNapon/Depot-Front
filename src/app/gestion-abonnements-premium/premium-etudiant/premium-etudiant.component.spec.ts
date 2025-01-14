import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumEtudiantComponent } from './premium-etudiant.component';

describe('PremiumEtudiantComponent', () => {
  let component: PremiumEtudiantComponent;
  let fixture: ComponentFixture<PremiumEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumEtudiantComponent]
    });
    fixture = TestBed.createComponent(PremiumEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
