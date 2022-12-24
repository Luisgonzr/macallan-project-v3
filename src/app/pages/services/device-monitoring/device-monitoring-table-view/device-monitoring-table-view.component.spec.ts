import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMonitoringTableViewComponent } from './device-monitoring-table-view.component';

describe('DeviceMonitoringTableViewComponent', () => {
  let component: DeviceMonitoringTableViewComponent;
  let fixture: ComponentFixture<DeviceMonitoringTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMonitoringTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMonitoringTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
