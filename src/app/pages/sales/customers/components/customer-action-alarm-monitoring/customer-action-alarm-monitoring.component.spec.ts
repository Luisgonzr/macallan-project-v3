import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActionAlarmMonitoringComponent } from './customer-action-alarm-monitoring.component';

describe('CustomerActionAlarmMonitoringComponent', () => {
  let component: CustomerActionAlarmMonitoringComponent;
  let fixture: ComponentFixture<CustomerActionAlarmMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerActionAlarmMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerActionAlarmMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
