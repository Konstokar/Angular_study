import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardViewComponent } from './user-card-view-component';

describe('UserCardViewComponent', () => {
  let component: UserCardViewComponent;
  let fixture: ComponentFixture<UserCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
