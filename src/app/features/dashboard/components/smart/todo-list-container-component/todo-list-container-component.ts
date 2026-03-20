import { Component } from '@angular/core';
import {TodoListViewComponent} from '../../dump/todo-list-view-component/todo-list-view-component';

@Component({
  selector: 'app-todo-list-container-component',
  imports: [
    TodoListViewComponent
  ],
  templateUrl: './todo-list-container-component.html',
  styleUrl: './todo-list-container-component.css',
})
export class TodoListContainerComponent {
  protected project = "Study Angular";
  protected tasks = ["Standalone", "TypeScript", "CSS", "HTML"];
}
