import {Component, EventEmitter, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list-view-component',
    imports: [
        FormsModule
    ],
  templateUrl: './todo-list-view-component.html',
  styleUrl: './todo-list-view-component.css',
  standalone: true
})
export class TodoListViewComponent {
  @Input() project!: string;
  @Input() tasks!: string[];
  protected add = new EventEmitter<string>();
}
