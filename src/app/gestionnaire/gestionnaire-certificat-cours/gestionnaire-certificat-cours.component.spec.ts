import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireCertificatCoursComponent } from './gestionnaire-certificat-cours.component';

describe('GestionnaireCertificatCoursComponent', () => {
  let component: GestionnaireCertificatCoursComponent;
  let fixture: ComponentFixture<GestionnaireCertificatCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireCertificatCoursComponent]
    });
    fixture = TestBed.createComponent(GestionnaireCertificatCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
