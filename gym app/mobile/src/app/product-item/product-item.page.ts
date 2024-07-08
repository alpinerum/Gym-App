import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ModalController } from '@ionic/angular';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.page.html',
  styleUrls: ['./product-item.page.scss'],
})
export class ProductItemPage implements OnInit {

  product!: Product;
  constructor(private service: ProductsService, private modalCtrl: ModalController, private cartService: CartService) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  addToCart(product: any) {
    this.cartService.addProduct(product);
  }

  checkSoldOut(product: any) {
    return (product.inStock <= 0);
  }
}
