import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMonitoringCreateComponent } from './device-monitoring-create.component';

describe('DeviceMonitoringCreateComponent', () => {
  let component: DeviceMonitoringCreateComponent;
  let fixture: ComponentFixture<DeviceMonitoringCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMonitoringCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMonitoringCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
