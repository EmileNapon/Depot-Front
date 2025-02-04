import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlwtestComponent } from './flwtest.component';

describe('FlwtestComponent', () => {
  let component: FlwtestComponent;
  let fixture: ComponentFixture<FlwtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlwtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlwtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
