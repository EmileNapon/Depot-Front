import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbordEtudiantTalentComponent } from './dasbord-etudiant-talent.component';

describe('DasbordEtudiantTalentComponent', () => {
  let component: DasbordEtudiantTalentComponent;
  let fixture: ComponentFixture<DasbordEtudiantTalentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasbordEtudiantTalentComponent]
    });
    fixture = TestBed.createComponent(DasbordEtudiantTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
