import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesTableViewComponent } from './invoices-table-view.component';

describe('InvoicesTableViewComponent', () => {
  let component: InvoicesTableViewComponent;
  let fixture: ComponentFixture<InvoicesTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
