import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActionProfileComponent } from './customer-action-profile.component';

describe('CustomerActionProfileComponent', () => {
  let component: CustomerActionProfileComponent;
  let fixture: ComponentFixture<CustomerActionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerActionProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerActionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
