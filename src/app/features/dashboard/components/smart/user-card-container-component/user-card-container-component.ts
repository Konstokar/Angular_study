import { Component } from '@angular/core';
import {UserCardViewComponent} from '../../dump/user-card-view-component/user-card-view-component';

@Component({
  selector: 'app-user-card-container-component',
  imports: [
    UserCardViewComponent
  ],
  templateUrl: './user-card-container-component.html',
  styleUrl: './user-card-container-component.css',
})
export class UserCardContainerComponent {
  protected name = "Kekekek";
  protected fields = ["email", "password"];
  protected isLoggedIn = true;
}
