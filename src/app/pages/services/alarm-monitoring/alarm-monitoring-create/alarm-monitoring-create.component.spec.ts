import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmMonitoringCreateComponent } from './alarm-monitoring-create.component';

describe('AlarmMonitoringCreateComponent', () => {
  let component: AlarmMonitoringCreateComponent;
  let fixture: ComponentFixture<AlarmMonitoringCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmMonitoringCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMonitoringCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
