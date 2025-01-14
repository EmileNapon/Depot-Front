import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireModifierContenuCoursComponent } from './gestionnaire-modifier-contenu-cours.component';

describe('GestionnaireModifierContenuCoursComponent', () => {
  let component: GestionnaireModifierContenuCoursComponent;
  let fixture: ComponentFixture<GestionnaireModifierContenuCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireModifierContenuCoursComponent]
    });
    fixture = TestBed.createComponent(GestionnaireModifierContenuCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
