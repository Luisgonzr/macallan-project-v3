import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTableViewComponent } from './quote-table-view.component';

describe('QuoteTableViewComponent', () => {
  let component: QuoteTableViewComponent;
  let fixture: ComponentFixture<QuoteTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
