import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get category() {
    return this.form.get('category');
  }

  get description() {
    return this.form.get('description');
  }

  async submitForm() {
    let alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your request has been sent!',
      buttons: ['OK']
    });
    alert.present().then(()=> {
      this.modalCtrl.dismiss();
    });
  }
}
