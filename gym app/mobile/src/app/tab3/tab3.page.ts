import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gymService } from '../gymService';
import { GymServiceService } from '../gym-service.service';
import { ModalController } from '@ionic/angular';
import { BuyservicePage } from '../buyservice/buyservice.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
services: gymService[] = [];

  @ViewChild('cart', { static: false, read: ElementRef })
  fab!: ElementRef;

  constructor(private service: GymServiceService, private modalCtrl: ModalController) {}
  ngOnInit(): void {
    this.service.getServices().subscribe((res)=>this.services=res);
  }
  async openCart(gym_service : any) {
    let model = await this.modalCtrl.create({
      component: BuyservicePage,
      cssClass: 'buyservice',
      componentProps: { gym_service }
    });
    model.onWillDismiss().then(()=> {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
    });
    model.present();
  }
}
