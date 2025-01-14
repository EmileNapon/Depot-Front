import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireDomaineComponent } from './gestionnaire-domaine.component';

describe('GestionnaireDomaineComponent', () => {
  let component: GestionnaireDomaineComponent;
  let fixture: ComponentFixture<GestionnaireDomaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireDomaineComponent]
    });
    fixture = TestBed.createComponent(GestionnaireDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
