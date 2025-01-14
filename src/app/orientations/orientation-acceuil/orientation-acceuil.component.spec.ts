import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationAcceuilComponent } from './orientation-acceuil.component';

describe('OrientationAcceuilComponent', () => {
  let component: OrientationAcceuilComponent;
  let fixture: ComponentFixture<OrientationAcceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrientationAcceuilComponent]
    });
    fixture = TestBed.createComponent(OrientationAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
