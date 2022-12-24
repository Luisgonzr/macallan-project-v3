import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActionBillingsComponent } from './customer-action-billings.component';

describe('CustomerActionBillingsComponent', () => {
  let component: CustomerActionBillingsComponent;
  let fixture: ComponentFixture<CustomerActionBillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerActionBillingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerActionBillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
