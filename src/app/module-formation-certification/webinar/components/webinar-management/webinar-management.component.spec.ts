import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarManagementComponent } from './webinar-management.component';

describe('WebinarManagementComponent', () => {
  let component: WebinarManagementComponent;
  let fixture: ComponentFixture<WebinarManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarManagementComponent]
    });
    fixture = TestBed.createComponent(WebinarManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
