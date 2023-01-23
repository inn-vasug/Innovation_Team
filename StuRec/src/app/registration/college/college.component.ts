import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
  regDetails = new FormGroup({
    instituteName: new FormControl(''),
    userEmail: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    phone: new FormControl(''),
    instituteURL: new FormControl('')
  });

  onRegister() {
    console.log(this.regDetails.value);
  }
}
