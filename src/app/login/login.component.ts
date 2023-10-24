import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  username = '';
  password = '';
  errorMsg = '';

  hardcodedAuth = [
    {
      uname: 'superadmin',
      pwd: '12345',
    },
    { uname: 'chief', pwd: '00000' },
  ];

  ngOnInit(): void {
    const isAuth = window?.localStorage?.getItem('auth');
    if (!!isAuth) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    const checkAcc = this.hardcodedAuth?.find(
      (i) => i.uname === this.username && i.pwd === this.password
    );

    if (!checkAcc) {
      this.errorMsg = 'Incorrect username or password. Please try again';
    } else {
      this.errorMsg = '';
      window?.localStorage?.setItem('auth', `auth-${this.username}`);
      this.router.navigate(['/home']);
    }
  }
}
