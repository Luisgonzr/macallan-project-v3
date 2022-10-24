import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerFormComponent } from './create-customer-form.component';

describe('CreateCustomerFormComponent', () => {
  let component: CreateCustomerFormComponent;
  let fixture: ComponentFixture<CreateCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
