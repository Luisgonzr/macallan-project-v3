import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesTableViewComponent } from './charges-table-view.component';

describe('ChargesTableViewComponent', () => {
  let component: ChargesTableViewComponent;
  let fixture: ComponentFixture<ChargesTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
