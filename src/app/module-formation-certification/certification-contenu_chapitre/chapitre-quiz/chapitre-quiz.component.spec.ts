import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreQuizComponent } from './chapitre-quiz.component';

describe('ChapitreQuizComponent', () => {
  let component: ChapitreQuizComponent;
  let fixture: ComponentFixture<ChapitreQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapitreQuizComponent]
    });
    fixture = TestBed.createComponent(ChapitreQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
