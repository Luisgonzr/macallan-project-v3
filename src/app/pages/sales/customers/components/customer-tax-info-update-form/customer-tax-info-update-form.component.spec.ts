import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTaxInfoUpdateFormComponent } from './customer-tax-info-update-form.component';

describe('CustomerTaxInfoUpdateFormComponent', () => {
  let component: CustomerTaxInfoUpdateFormComponent;
  let fixture: ComponentFixture<CustomerTaxInfoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTaxInfoUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTaxInfoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
