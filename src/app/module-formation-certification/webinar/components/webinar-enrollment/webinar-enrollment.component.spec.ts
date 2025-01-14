import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarEnrollComponent } from './webinar-enrollment.component';

describe('WebinarEnrollmentComponent', () => {
  let component: WebinarEnrollComponent;
  let fixture: ComponentFixture<WebinarEnrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarEnrollComponent]
    });
    fixture = TestBed.createComponent(WebinarEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
