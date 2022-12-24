import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceInstallationAndOtherActionsComponent } from './maintenance-installation-and-other-actions.component';

describe('MaintenanceInstallationAndOtherActionsComponent', () => {
  let component: MaintenanceInstallationAndOtherActionsComponent;
  let fixture: ComponentFixture<MaintenanceInstallationAndOtherActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceInstallationAndOtherActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceInstallationAndOtherActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
