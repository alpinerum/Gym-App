import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartModelPage } from '../cart-model/cart-model.page';
import { ProductItemPage } from '../product-item/product-item.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  cart: Product[] = [];
  products: Product[] = [];
  itemCount!: BehaviorSubject<number>;

  @ViewChild('cart', { static: false, read: ElementRef })
  fab!: ElementRef;
  
  constructor(private service: ProductsService, private cartService : CartService, private modalCtrl : ModalController) {}

  ngOnInit(): void {
  //   this.products = [
  //     {
  //         "image": "https://underarmour.scene7.com/is/image/Underarmour/PS1326413-409_HF?rp=standard-0pad%7CpdpMainDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=1836&hei=1950&size=1500%2C1500",
  //         "name": "Men's UA Tech™ 2.0 Short Sleeve",
  //         "description": "UA Tech™ is our original go-to training gear: loose, light, and it keeps you cool. That's why this men's training T-shirt is everything you need.",
  //         "category": "Apparel",
  //         "price": 30,
  //     },
  //     {
  //         "image": "https://cdn.shopify.com/s/files/1/1367/5207/files/CrewSocks3PkWhite_I1A2F-WBBM1_001cc294-5ade-416d-9cf5-e8e4d7febd0f_1920x.jpg?v=1689686816",
  //         "name": "Crew Socks 3PK",
  //         "description": "The Gymshark Crew Socks provide comfort, cushioning and contouring with a mix of reinforced stretch and ribbing and a flattering fit to the calf. You can be sure you’ll step with support and step with style, from treadmill to sidewalk.",
  //         "category": "Apparel",
  //         "price": 20,
  //     }
  // ];
    this.service.getProducts().subscribe((res)=>this.products=res);
    this.cart = this.cartService.getCart();
    this.itemCount = this.cartService.getCartItemCount();
  }
  addToCart(product: any) {
    this.cartService.addProduct(product);
  }
  async openCart() {
    let model = await this.modalCtrl.create({
      component: CartModelPage,
      cssClass: 'cart-model'
    });
    model.onWillDismiss().then(()=> {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
    });
    model.present();
  }
  checkSoldOut(product: any) {
    return (product.inStock <= 0);
  }

  filterCategory(category : any) {
    console.log(category.detail.value);
    if (category.detail.value == 'All' || category.detail.value == '') {
      this.service.getProducts().subscribe((res)=>this.products=res);
    }
    else {
      this.service.filterProducts(category.detail.value).subscribe((res)=>this.products=res);
    }
    
  }

  sortProducts(order: any) {
    if (order.detail.value == 'Alphabetically') {
      this.products.sort((a, b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }
    else if (order.detail.value == 'priceLtoH') {
      this.products.sort((a, b)=> {
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }
    else if (order.detail.value == 'priceHtoL') {
      this.products.sort((a, b)=> {
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    }
    
  }

  async openProduct(product: any) {
    let model = await this.modalCtrl.create({
      component: ProductItemPage,
      cssClass: 'product-item',
      componentProps: { product }
    });
    model.onWillDismiss().then(()=> {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
    });
    model.present();
  }
}
