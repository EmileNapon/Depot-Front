import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationContenuComponent } from './certification-contenu.component';

describe('CertificationContenuComponent', () => {
  let component: CertificationContenuComponent;
  let fixture: ComponentFixture<CertificationContenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationContenuComponent]
    });
    fixture = TestBed.createComponent(CertificationContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
