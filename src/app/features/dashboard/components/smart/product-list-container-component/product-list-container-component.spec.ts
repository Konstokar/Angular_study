import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListContainerComponent } from './product-list-container-component';

describe('ProductListContainerComponent', () => {
  let component: ProductListContainerComponent;
  let fixture: ComponentFixture<ProductListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
