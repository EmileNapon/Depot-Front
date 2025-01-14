import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireModulesComponent } from './gestionnaire-modules.component';

describe('GestionnaireModulesComponent', () => {
  let component: GestionnaireModulesComponent;
  let fixture: ComponentFixture<GestionnaireModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireModulesComponent]
    });
    fixture = TestBed.createComponent(GestionnaireModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
