import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableViewComponent } from './users-table-view.component';

describe('UsersTableViewComponent', () => {
  let component: UsersTableViewComponent;
  let fixture: ComponentFixture<UsersTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
