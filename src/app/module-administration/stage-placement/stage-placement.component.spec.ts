import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePlacementComponent } from './stage-placement.component';

describe('StagePlacementComponent', () => {
  let component: StagePlacementComponent;
  let fixture: ComponentFixture<StagePlacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagePlacementComponent]
    });
    fixture = TestBed.createComponent(StagePlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
