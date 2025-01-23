import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFormateurComponent } from './creation-formateur.component';

describe('CreationFormateurComponent', () => {
  let component: CreationFormateurComponent;
  let fixture: ComponentFixture<CreationFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationFormateurComponent]
    });
    fixture = TestBed.createComponent(CreationFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
