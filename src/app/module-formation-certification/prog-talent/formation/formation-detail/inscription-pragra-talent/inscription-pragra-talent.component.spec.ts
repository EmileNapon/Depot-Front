import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPragraTalentComponent } from './inscription-pragra-talent.component';

describe('InscriptionPragraTalentComponent', () => {
  let component: InscriptionPragraTalentComponent;
  let fixture: ComponentFixture<InscriptionPragraTalentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionPragraTalentComponent]
    });
    fixture = TestBed.createComponent(InscriptionPragraTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
