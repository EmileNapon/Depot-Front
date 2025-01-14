import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireFormationDetailComponent } from './formation-detail.component';

describe('FormationDetailComponent', () => {
  let component: GestionnaireFormationDetailComponent;
  let fixture: ComponentFixture<GestionnaireFormationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireFormationDetailComponent]
    });
    fixture = TestBed.createComponent(GestionnaireFormationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
