import { Component, OnInit } from '@angular/core';
import { gymService } from '../gymService';
import { GymServiceService } from '../gym-service.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buyservice',
  templateUrl: './buyservice.page.html',
  styleUrls: ['./buyservice.page.scss'],
})
export class BuyservicePage implements OnInit {

  gym_service!: gymService;
  constructor(private modalCtrl: ModalController, private service: GymServiceService, private alertCtrl: AlertController) { }

  ngOnInit() {
    //this.service.getServices().subscribe((res)=>this.gym_service=res);
    console.log(this.gym_service.name);
  }
  
  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your order!',
      message: 'Thanks for your purchase!',
      buttons: ['OK']
    });
    alert.present().then(()=> {
      this.modalCtrl.dismiss();
    });
  }
}
