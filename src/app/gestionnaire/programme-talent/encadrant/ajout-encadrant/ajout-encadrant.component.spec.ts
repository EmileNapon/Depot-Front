import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEncadrantComponent } from './ajout-encadrant.component';

describe('AjoutEncadrantComponent', () => {
  let component: AjoutEncadrantComponent;
  let fixture: ComponentFixture<AjoutEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEncadrantComponent]
    });
    fixture = TestBed.createComponent(AjoutEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
