import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAdministrationComponent } from './module-administration.component';

describe('ModuleAdministrationComponent', () => {
  let component: ModuleAdministrationComponent;
  let fixture: ComponentFixture<ModuleAdministrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleAdministrationComponent]
    });
    fixture = TestBed.createComponent(ModuleAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
