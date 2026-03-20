import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ShortenTextPipe} from '../../../pipes/shorten-text-pipe/shorten-text-pipe';

@Component({
  selector: 'app-product-list-view-component',
  imports: [
    FormsModule,
    ShortenTextPipe
  ],
  templateUrl: './product-list-view-component.html',
  styleUrl: './product-list-view-component.css',
  standalone: true
})
export class ProductListViewComponent {
  @Input() filter! : string;
  @Input() products!: string[];
}
