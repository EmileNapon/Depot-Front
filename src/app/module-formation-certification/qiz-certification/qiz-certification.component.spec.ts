import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QizCertificationComponent } from './qiz-certification.component';

describe('QizCertificationComponent', () => {
  let component: QizCertificationComponent;
  let fixture: ComponentFixture<QizCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QizCertificationComponent]
    });
    fixture = TestBed.createComponent(QizCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
