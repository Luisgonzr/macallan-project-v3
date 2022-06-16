import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardOpComponent } from './credit-card-op.component';

describe('CreditCardOpComponent', () => {
  let component: CreditCardOpComponent;
  let fixture: ComponentFixture<CreditCardOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
