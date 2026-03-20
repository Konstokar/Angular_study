import { Component } from '@angular/core';
import {ProductListViewComponent} from '../../dump/product-list-view-component/product-list-view-component';

@Component({
  selector: 'app-product-list-container-component',
  imports: [
    ProductListViewComponent
  ],
  templateUrl: './product-list-container-component.html',
  styleUrl: './product-list-container-component.css',
})
export class ProductListContainerComponent {
  protected filter = "Seafood";
  protected products = ["Sushi", "Fish", "Octopus"];
}
