import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFormationCertificationComponent } from './module-formation-certification.component';

describe('ModuleFormationCertificationComponent', () => {
  let component: ModuleFormationCertificationComponent;
  let fixture: ComponentFixture<ModuleFormationCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleFormationCertificationComponent]
    });
    fixture = TestBed.createComponent(ModuleFormationCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
