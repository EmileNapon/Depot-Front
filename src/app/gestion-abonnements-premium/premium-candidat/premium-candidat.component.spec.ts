import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCandidatComponent } from './premium-candidat.component';

describe('PremiumCandidatComponent', () => {
  let component: PremiumCandidatComponent;
  let fixture: ComponentFixture<PremiumCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCandidatComponent]
    });
    fixture = TestBed.createComponent(PremiumCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
