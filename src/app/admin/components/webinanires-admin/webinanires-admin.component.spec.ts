import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinaniresAdminComponent } from './webinanires-admin.component';

describe('WebinaniresAdminComponent', () => {
  let component: WebinaniresAdminComponent;
  let fixture: ComponentFixture<WebinaniresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinaniresAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinaniresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
