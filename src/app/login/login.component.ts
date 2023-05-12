import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm: FormGroup = new FormGroup({
    //create a FormControl for each input
    email: new FormControl(''),
    password: new FormControl(''),
 });
 loginObj: any = {
  email: '',
  password: ''
};

constructor(
  private router: Router,
) { }

ngOnInit(): void {
  const localData = localStorage.getItem('user');
  if (localData != null){
    this.loginObj = JSON.parse(localData);
  }
  }



onLogin() {

  const isUser = this.loginObj.email === this.loginForm.value.email && this.loginObj.password === this.loginForm.value.password;
if(isUser){
  alert('Login Successful');
  this.router.navigate(['/home']);
}else{
  alert('Login Failed');
  this.router.navigate(['/login']);
}
this.loginForm.reset();

}
}
