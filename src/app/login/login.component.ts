import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm: FormGroup = new FormGroup({
    //create a FormControl for each input
    name: new FormControl(''),
    password: new FormControl(''),
 });
 //handle the on submit
 onSubmit() {
    console.warn(this.loginForm.value);
    console.log('Name is ' + this.loginForm.value.name);
    console.log('Password is ' + this.loginForm.value.password);
 }
}
