import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilFormationComponent } from './acceuil-formation.component';

describe('AcceuilFormationComponent', () => {
  let component: AcceuilFormationComponent;
  let fixture: ComponentFixture<AcceuilFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilFormationComponent]
    });
    fixture = TestBed.createComponent(AcceuilFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
