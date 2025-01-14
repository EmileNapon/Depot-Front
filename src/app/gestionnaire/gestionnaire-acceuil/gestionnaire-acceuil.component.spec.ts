import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireAcceuilComponent } from './gestionnaire-acceuil.component';

describe('GestionnaireAcceuilComponent', () => {
  let component: GestionnaireAcceuilComponent;
  let fixture: ComponentFixture<GestionnaireAcceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireAcceuilComponent]
    });
    fixture = TestBed.createComponent(GestionnaireAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
