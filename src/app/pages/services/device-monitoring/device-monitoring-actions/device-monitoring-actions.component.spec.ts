import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMonitoringActionsComponent } from './device-monitoring-actions.component';

describe('DeviceMonitoringActionsComponent', () => {
  let component: DeviceMonitoringActionsComponent;
  let fixture: ComponentFixture<DeviceMonitoringActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMonitoringActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMonitoringActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
