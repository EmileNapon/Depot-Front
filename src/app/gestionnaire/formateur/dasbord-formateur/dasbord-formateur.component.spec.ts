import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbordFormateurComponent } from './dasbord-formateur.component';

describe('DasbordFormateurComponent', () => {
  let component: DasbordFormateurComponent;
  let fixture: ComponentFixture<DasbordFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasbordFormateurComponent]
    });
    fixture = TestBed.createComponent(DasbordFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
