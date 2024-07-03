import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products : Product[] = [];
  private cart=[];
  private itemCount = new BehaviorSubject(0);
  constructor(private service: ProductsService) { this.service.getProducts().subscribe((res)=>this.products=res); }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.itemCount;
  }

  addProduct(product: any) {
    // let added = false;
    // for (let item of this.cart) {
    //   if (item.name === this.products.name) {
    //     item.amount += 1;
    //     added = true;
    //     break;
    //   }
    // }
  }
}
