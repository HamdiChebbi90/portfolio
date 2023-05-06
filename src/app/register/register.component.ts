import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
