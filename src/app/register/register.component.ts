import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loginForm: FormGroup = new FormGroup({
    //create a FormControl for each input
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
 });

  loginObj: any = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  password: ''

  };
  constructor(
    private route: Router,
  ) { }
  ngOnInit(): void {
    const localData = localStorage.getItem('user');
    if (localData != null){
      this.loginObj = JSON.parse(localData);
    }
    }
  onSignIn() {
    console.log(this.loginObj);
    this.loginObj.firstname = this.loginForm.value.firstname;
    this.loginObj.lastname = this.loginForm.value.lastname;
    this.loginObj.phone = this.loginForm.value.phone;
    this.loginObj.email = this.loginForm.value.email;
    this.loginObj.password = this.loginForm.value.password;
    console.log(this.loginObj);

    localStorage.setItem('user', JSON.stringify(this.loginObj));
    alert('Register Successful');
    this.route.navigate(['/login']);
    this.loginForm.reset();

  }









}
