import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.page.html',
  styleUrls: ['./cart-model.page.scss'],
})
export class CartModelPage implements OnInit {

  cart: Product[] = [];
  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product: any) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product: any) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: any) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.quantity, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    
  }
}
