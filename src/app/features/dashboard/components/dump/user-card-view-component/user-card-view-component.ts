import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NameFormartingPipe} from '../../../pipes/name-formarting-pipe/name-formarting-pipe';

@Component({
  selector: 'app-user-card-view-component',
  imports: [
    FormsModule,
    NameFormartingPipe
  ],
  templateUrl: './user-card-view-component.html',
  styleUrl: './user-card-view-component.css',
  standalone: true
})
export class UserCardViewComponent {
  @Input() name!: string;
  @Input() fields!: string[];
  @Input() isLoggedIn!: boolean;
}
