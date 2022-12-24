import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmMonitoringTableViewComponent } from './alarm-monitoring-table-view.component';

describe('AlarmMonitoringTableViewComponent', () => {
  let component: AlarmMonitoringTableViewComponent;
  let fixture: ComponentFixture<AlarmMonitoringTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmMonitoringTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMonitoringTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
