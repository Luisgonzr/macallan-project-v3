import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanFormComponent } from './create-plan-form.component';

describe('CreatePlanFormComponent', () => {
  let component: CreatePlanFormComponent;
  let fixture: ComponentFixture<CreatePlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
