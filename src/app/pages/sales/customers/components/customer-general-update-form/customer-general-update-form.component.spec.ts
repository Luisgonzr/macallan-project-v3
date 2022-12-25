import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGeneralUpdateFormComponent } from './customer-general-update-form.component';

describe('CustomerGeneralUpdateFormComponent', () => {
  let component: CustomerGeneralUpdateFormComponent;
  let fixture: ComponentFixture<CustomerGeneralUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGeneralUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGeneralUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
