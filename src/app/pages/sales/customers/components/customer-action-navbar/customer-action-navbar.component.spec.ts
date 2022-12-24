import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActionNavbarComponent } from './customer-action-navbar.component';

describe('CustomerActionNavbarComponent', () => {
  let component: CustomerActionNavbarComponent;
  let fixture: ComponentFixture<CustomerActionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerActionNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerActionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
