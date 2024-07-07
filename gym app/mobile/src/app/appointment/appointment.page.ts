import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

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

  submitForm() {
    
  }
}
