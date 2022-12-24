import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmMonitoringActionsComponent } from './alarm-monitoring-actions.component';

describe('AlarmMonitoringActionsComponent', () => {
  let component: AlarmMonitoringActionsComponent;
  let fixture: ComponentFixture<AlarmMonitoringActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmMonitoringActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMonitoringActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
