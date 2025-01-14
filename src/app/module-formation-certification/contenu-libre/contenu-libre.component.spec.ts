import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuLibreComponent } from './contenu-libre.component';

describe('ContenuLibreComponent', () => {
  let component: ContenuLibreComponent;
  let fixture: ComponentFixture<ContenuLibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenuLibreComponent]
    });
    fixture = TestBed.createComponent(ContenuLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
