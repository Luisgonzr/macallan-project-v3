import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeActionsComponent } from './charge-actions.component';

describe('ChargeActionsComponent', () => {
  let component: ChargeActionsComponent;
  let fixture: ComponentFixture<ChargeActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
