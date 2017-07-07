import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductFilterPipe} from "./product-filter.pipe";
import {RouterModule} from "@angular/router";
import {routes} from "./product.routes";
import {ProductDetailGuard} from "./product-guard.service";
import {ProductService} from "./product.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations:   [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  imports:        [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:    [
    ProductService,
    ProductDetailGuard
  ],
})
export class ProductModule {}
