import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationAnnonceComponent } from './modification-annonce.component';

describe('ModificationAnnonceComponent', () => {
  let component: ModificationAnnonceComponent;
  let fixture: ComponentFixture<ModificationAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationAnnonceComponent]
    });
    fixture = TestBed.createComponent(ModificationAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
