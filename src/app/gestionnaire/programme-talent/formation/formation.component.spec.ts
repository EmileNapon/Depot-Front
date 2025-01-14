import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireFormationComponent } from './formation.component';

describe('FormationComponent', () => {
  let component: GestionnaireFormationComponent;
  let fixture: ComponentFixture<GestionnaireFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireFormationComponent]
    });
    fixture = TestBed.createComponent(GestionnaireFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
