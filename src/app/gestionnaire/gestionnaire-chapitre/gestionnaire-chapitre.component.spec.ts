import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireChapitreComponent } from './gestionnaire-chapitre.component';

describe('GestionnaireChapitreComponent', () => {
  let component: GestionnaireChapitreComponent;
  let fixture: ComponentFixture<GestionnaireChapitreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireChapitreComponent]
    });
    fixture = TestBed.createComponent(GestionnaireChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
