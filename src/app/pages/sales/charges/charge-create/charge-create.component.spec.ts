import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeCreateComponent } from './charge-create.component';

describe('ChargeCreateComponent', () => {
  let component: ChargeCreateComponent;
  let fixture: ComponentFixture<ChargeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
