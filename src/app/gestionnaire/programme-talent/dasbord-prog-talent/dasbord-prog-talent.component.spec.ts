import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireDasbordProgTalentComponent } from './dasbord-prog-talent.component';

describe('DasbordProgTalentComponent', () => {
  let component: GestionnaireDasbordProgTalentComponent;
  let fixture: ComponentFixture<GestionnaireDasbordProgTalentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireDasbordProgTalentComponent]
    });
    fixture = TestBed.createComponent(GestionnaireDasbordProgTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
