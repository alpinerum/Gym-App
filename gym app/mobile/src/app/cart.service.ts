import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products : Product[] = [];
  private cart: Product[] = [];
  private itemCount = new BehaviorSubject(0);
  constructor(private service: ProductsService) {
    this.service.getProducts().subscribe((res)=>this.products=res); 
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.itemCount;
  }

  addProduct(product : any) {
    let added = false;
    for (let item of this.cart) {
      if (item.name === product.name && item.quantity < product.inStock) {
        item.quantity += 1;
        added = true;
        this.itemCount.next(this.itemCount.value + 1);
        break;
      }
      else if (item.quantity == product.inStock) {
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
      this.itemCount.next(this.itemCount.value + 1);
      product.quantity += 1;
    }
    
  }

  decreaseProduct(product : any) {
    for (let [index, item] of this.cart.entries()) {
      if (item.name === product.name) {
        item.quantity -= 1;
        if (item.quantity == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.itemCount.next(this.itemCount.value - 1);
  }

  removeProduct(product: any) {
    for (let [index, item] of this.cart.entries()) {
      if (item.name === product.name) {
        this.itemCount.next(this.itemCount.value - item.quantity);
        this.cart.splice(index, 1);
      }
    }
  }
}
