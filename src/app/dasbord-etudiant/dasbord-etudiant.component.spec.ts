import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbordEtudiantComponent } from './dasbord-etudiant.component';

describe('DasbordEtudiantComponent', () => {
  let component: DasbordEtudiantComponent;
  let fixture: ComponentFixture<DasbordEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasbordEtudiantComponent]
    });
    fixture = TestBed.createComponent(DasbordEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
