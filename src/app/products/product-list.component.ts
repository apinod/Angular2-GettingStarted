import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  templateUrl: 'app/products/product-list.component.html',
  styleUrls: ['app/products/product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  listFilter: string;
  products: IProduct[];
  errorMessage: string;

  constructor(private _productService: ProductService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  };

  ngOnInit(): void {
    this._productService.getProducts()
            .subscribe(
              (products: IProduct[]) => this.products = products,
              (error: string) => this.errorMessage = error
            );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
