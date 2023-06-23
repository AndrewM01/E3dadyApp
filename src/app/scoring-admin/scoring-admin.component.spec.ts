import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringAdminComponent } from './scoring-admin.component';

describe('ScoringAdminComponent', () => {
  let component: ScoringAdminComponent;
  let fixture: ComponentFixture<ScoringAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoringAdminComponent]
    });
    fixture = TestBed.createComponent(ScoringAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
