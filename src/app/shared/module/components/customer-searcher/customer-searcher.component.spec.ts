import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearcherComponent } from './customer-searcher.component';

describe('CustomerSearcherComponent', () => {
  let component: CustomerSearcherComponent;
  let fixture: ComponentFixture<CustomerSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
