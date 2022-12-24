import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActionInvoicesComponent } from './customer-action-invoices.component';

describe('CustomerActionInvoicesComponent', () => {
  let component: CustomerActionInvoicesComponent;
  let fixture: ComponentFixture<CustomerActionInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerActionInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerActionInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
