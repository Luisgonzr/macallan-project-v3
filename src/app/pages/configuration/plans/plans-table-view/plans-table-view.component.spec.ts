import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansTableViewComponent } from './plans-table-view.component';

describe('PlansTableViewComponent', () => {
  let component: PlansTableViewComponent;
  let fixture: ComponentFixture<PlansTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
