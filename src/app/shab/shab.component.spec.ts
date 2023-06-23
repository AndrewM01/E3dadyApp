import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabComponent } from './shab.component';

describe('ShabComponent', () => {
  let component: ShabComponent;
  let fixture: ComponentFixture<ShabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShabComponent]
    });
    fixture = TestBed.createComponent(ShabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
