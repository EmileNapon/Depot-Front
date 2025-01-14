import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActivitesComponent } from './last-activites.component';

describe('LastActivitesComponent', () => {
  let component: LastActivitesComponent;
  let fixture: ComponentFixture<LastActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastActivitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
