import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationSeanceComponent } from './modification-seance.component';

describe('ModificationSeanceComponent', () => {
  let component: ModificationSeanceComponent;
  let fixture: ComponentFixture<ModificationSeanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificationSeanceComponent]
    });
    fixture = TestBed.createComponent(ModificationSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
