import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTypeComponent } from './user-profile-type.component';

describe('UserProfileTypeComponent', () => {
  let component: UserProfileTypeComponent;
  let fixture: ComponentFixture<UserProfileTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
