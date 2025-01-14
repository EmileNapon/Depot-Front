import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationFormationComponent } from './modification-formation.component';

describe('ModificationFormationComponent', () => {
  let component: ModificationFormationComponent;
  let fixture: ComponentFixture<ModificationFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationFormationComponent]
    });
    fixture = TestBed.createComponent(ModificationFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
