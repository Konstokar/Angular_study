import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListViewComponent } from './todo-list-view-component';

describe('TodoListViewComponent', () => {
  let component: TodoListViewComponent;
  let fixture: ComponentFixture<TodoListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
