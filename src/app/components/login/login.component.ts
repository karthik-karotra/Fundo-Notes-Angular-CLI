import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from "./../../services/login-service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private snackbar: MatSnackBar, private router: Router,private loginService: LoginService) { }

  hide = true
  cartId: string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  num;

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

  onClicked() {
    if (this.email.valid && this.password.valid) {
      var loginData = {
        cartId: this.cartId,
        email: this.email.value,
        password: this.password.value,
      };
      this.loginService.getUserLoggedIn(loginData).subscribe((resp : Response) => {
        this.num =resp;
        console.log('Response : ', this.num);
        console.log('Response id: ', this.num.id);
        localStorage.setItem('Token',resp['id']),
        localStorage.setItem('FirstName',resp['firstName']),
        localStorage.setItem('LastName',resp['lastName']),
        localStorage.setItem('EmailID',resp['email']),
        this.snackbar.open('Login Successful', 'end now', { duration: 4000 });
        this.router.navigateByUrl('dashboard');
      },
        error => {
          this.snackbar.open('Enter Valid Credentials', 'end now', { duration: 4000 });
        }
      );
    }
  }

  ngOnInit(): void { }
}
