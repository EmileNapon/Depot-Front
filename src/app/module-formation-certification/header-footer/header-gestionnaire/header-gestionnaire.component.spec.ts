import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGestionnaireComponent } from './header-gestionnaire.component';

describe('HeaderGestionnaireComponent', () => {
  let component: HeaderGestionnaireComponent;
  let fixture: ComponentFixture<HeaderGestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderGestionnaireComponent]
    });
    fixture = TestBed.createComponent(HeaderGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
