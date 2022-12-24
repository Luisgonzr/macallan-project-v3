import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceInstallationAndOtherCreateComponent } from './maintenance-installation-and-other-create.component';

describe('MaintenanceInstallationAndOtherCreateComponent', () => {
  let component: MaintenanceInstallationAndOtherCreateComponent;
  let fixture: ComponentFixture<MaintenanceInstallationAndOtherCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceInstallationAndOtherCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceInstallationAndOtherCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
