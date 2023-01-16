import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSyncConektaComponent } from './customer-sync-conekta.component';

describe('CustomerSyncConektaComponent', () => {
  let component: CustomerSyncConektaComponent;
  let fixture: ComponentFixture<CustomerSyncConektaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSyncConektaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSyncConektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
