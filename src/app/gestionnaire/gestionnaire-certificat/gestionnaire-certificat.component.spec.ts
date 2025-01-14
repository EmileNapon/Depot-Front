import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireCertificatComponent } from './gestionnaire-certificat.component';

describe('GestionnaireCertificatComponent', () => {
  let component: GestionnaireCertificatComponent;
  let fixture: ComponentFixture<GestionnaireCertificatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireCertificatComponent]
    });
    fixture = TestBed.createComponent(GestionnaireCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
