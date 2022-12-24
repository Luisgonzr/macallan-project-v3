import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceInstallationAndOtherTableViewComponent } from './maintenance-installation-and-other-table-view.component';

describe('MaintenanceInstallationAndOtherTableViewComponent', () => {
  let component: MaintenanceInstallationAndOtherTableViewComponent;
  let fixture: ComponentFixture<MaintenanceInstallationAndOtherTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceInstallationAndOtherTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceInstallationAndOtherTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
