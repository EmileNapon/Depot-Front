import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFormationComponent } from './header-formation.component';

describe('HeaderFormationComponent', () => {
  let component: HeaderFormationComponent;
  let fixture: ComponentFixture<HeaderFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderFormationComponent]
    });
    fixture = TestBed.createComponent(HeaderFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
