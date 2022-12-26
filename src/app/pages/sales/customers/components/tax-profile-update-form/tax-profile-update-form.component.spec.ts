import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxProfileUpdateFormComponent } from './tax-profile-update-form.component';

describe('TaxProfileUpdateFormComponent', () => {
  let component: TaxProfileUpdateFormComponent;
  let fixture: ComponentFixture<TaxProfileUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxProfileUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxProfileUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
