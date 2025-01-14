import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireCoursComponent } from './gestionnaire-cours.component';

describe('GestionnaireCoursComponent', () => {
  let component: GestionnaireCoursComponent;
  let fixture: ComponentFixture<GestionnaireCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireCoursComponent]
    });
    fixture = TestBed.createComponent(GestionnaireCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
