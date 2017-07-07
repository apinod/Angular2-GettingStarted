import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {IProduct} from "./product";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
  private _productUrl: string = 'api/products/products.json';

  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
                .map((response: Response) => <IProduct[]>response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
  }

  private handleError(error: Response): Observable<string> {
    try {
      console.error(error);
      return  Observable.throw(error.json().error || 'Server error');
    } catch(e) {
      return Observable.throw('Server Error');
    }
  }
}
