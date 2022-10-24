import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewTableComponent } from './customer-view-table.component';

describe('CustomerViewTableComponent', () => {
  let component: CustomerViewTableComponent;
  let fixture: ComponentFixture<CustomerViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
