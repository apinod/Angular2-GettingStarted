import {Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductDetailGuard} from "./product-guard.service";

export let routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ ProductDetailGuard ]
  }
];
