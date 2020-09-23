import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessageForEmail() {
    return this.email.hasError('required') ? 'Email field cannot be blank' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessageForPassword() {
    return this.password.hasError('required') ? 'Password cannot be blank' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';
  }

  ngOnInit(): void { }
}
