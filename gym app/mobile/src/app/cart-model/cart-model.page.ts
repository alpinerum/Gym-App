import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.page.html',
  styleUrls: ['./cart-model.page.scss'],
})
export class CartModelPage implements OnInit {

  cart: Product[] = [];
  products: Product[] = [];
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private navCtrl: NavController, private service: ProductsService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((res)=>this.products=res);
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
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your order!',
      message: 'Your order will be delivered as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(()=> {
      this.modalCtrl.dismiss();
    });
    for (let item of this.cart) {
      //console.log(item.name);
      this.cartService.subtractStock(item.name, item.quantity);
    }
    //window.location.reload();
  }
  
}
