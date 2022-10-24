import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewTableComponent } from './plan-view-table.component';

describe('PlanViewTableComponent', () => {
  let component: PlanViewTableComponent;
  let fixture: ComponentFixture<PlanViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanViewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
