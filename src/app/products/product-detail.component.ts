import {Component, OnInit, OnDestroy} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProductService} from "./product.service";

@Component({
  templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy{
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      (params: Params) => {
        let id = +params['id'];
        this.getProduct(id);
      }
    );
    console.log('onInit');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('onDestroy');
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
        (product: IProduct) => {
          this.product = product;
          this.pageTitle += `: ${id}`;
        },
        error => {
          this.errorMessage = error;
          console.log(`OnError: ${error}`);
        }
    );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}

