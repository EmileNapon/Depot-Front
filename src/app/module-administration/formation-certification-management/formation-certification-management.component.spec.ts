import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCertificationManagementComponent } from './formation-certification-management.component';

describe('FormationCertificationManagementComponent', () => {
  let component: FormationCertificationManagementComponent;
  let fixture: ComponentFixture<FormationCertificationManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationCertificationManagementComponent]
    });
    fixture = TestBed.createComponent(FormationCertificationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
