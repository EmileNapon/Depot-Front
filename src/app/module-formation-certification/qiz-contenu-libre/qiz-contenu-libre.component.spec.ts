import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QizContenuLibreComponent } from './quiz-contenu-libre.component';

describe('QizContenuLibreComponent', () => {
  let component: QizContenuLibreComponent;
  let fixture: ComponentFixture<QizContenuLibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QizContenuLibreComponent]
    });
    fixture = TestBed.createComponent(QizContenuLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
