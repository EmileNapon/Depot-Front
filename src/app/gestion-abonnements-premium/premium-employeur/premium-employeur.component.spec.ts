import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumEmployeurComponent } from './premium-employeur.component';

describe('PremiumEmployeurComponent', () => {
  let component: PremiumEmployeurComponent;
  let fixture: ComponentFixture<PremiumEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumEmployeurComponent]
    });
    fixture = TestBed.createComponent(PremiumEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
