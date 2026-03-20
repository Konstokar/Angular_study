import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardContainerComponent } from './user-card-container-component';

describe('UserCardContainerComponent', () => {
  let component: UserCardContainerComponent;
  let fixture: ComponentFixture<UserCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
