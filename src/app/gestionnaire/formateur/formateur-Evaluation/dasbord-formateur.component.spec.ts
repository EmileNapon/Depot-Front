import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurEvaluationComponent } from './formateur-Evaluation';

describe('DasbordFormateurComponent', () => {
  let component: FormateurEvaluationComponent;
  let fixture: ComponentFixture<FormateurEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormateurEvaluationComponent]
    });
    fixture = TestBed.createComponent(FormateurEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
