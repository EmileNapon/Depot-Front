import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEncadrantComponent } from './modif-encadrant.component';

describe('ModifEncadrantComponent', () => {
  let component: ModifEncadrantComponent;
  let fixture: ComponentFixture<ModifEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifEncadrantComponent]
    });
    fixture = TestBed.createComponent(ModifEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
