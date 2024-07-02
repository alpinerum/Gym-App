import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
products: Product[] = [];
  constructor(private service: ProductsService) {}

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
  }
}
