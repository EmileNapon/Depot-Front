import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeEtudiantComponent } from './groupe-etudiant.component';

describe('GroupeEtudiantComponent', () => {
  let component: GroupeEtudiantComponent;
  let fixture: ComponentFixture<GroupeEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupeEtudiantComponent]
    });
    fixture = TestBed.createComponent(GroupeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
