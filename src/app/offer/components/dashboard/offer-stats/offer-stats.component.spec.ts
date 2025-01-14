import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferStatsComponent } from './offer-stats.component';

describe('OfferStatsComponent', () => {
  let component: OfferStatsComponent;
  let fixture: ComponentFixture<OfferStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
