import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressUpdateFormComponent } from './customer-address-update-form.component';

describe('CustomerAddressUpdateFormComponent', () => {
  let component: CustomerAddressUpdateFormComponent;
  let fixture: ComponentFixture<CustomerAddressUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddressUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddressUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
