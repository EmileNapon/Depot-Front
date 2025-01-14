import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QizCoursFormationPresentielleComponent } from './qiz-cours-formation-presentielle.component';

describe('QizCoursFormationPresentielleComponent', () => {
  let component: QizCoursFormationPresentielleComponent;
  let fixture: ComponentFixture<QizCoursFormationPresentielleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QizCoursFormationPresentielleComponent]
    });
    fixture = TestBed.createComponent(QizCoursFormationPresentielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
