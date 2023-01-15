import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteActionsComponent } from './quote-actions.component';

describe('QuoteActionsComponent', () => {
  let component: QuoteActionsComponent;
  let fixture: ComponentFixture<QuoteActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
