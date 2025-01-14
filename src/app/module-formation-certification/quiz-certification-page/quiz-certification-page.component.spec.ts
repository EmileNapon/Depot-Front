import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCertificationPageComponent } from './quiz-certification-page.component';

describe('QuizCertificationPageComponent', () => {
  let component: QuizCertificationPageComponent;
  let fixture: ComponentFixture<QuizCertificationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizCertificationPageComponent]
    });
    fixture = TestBed.createComponent(QuizCertificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
