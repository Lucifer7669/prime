import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { FirebaseService } from '../service/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isSignupForm = false;
  public isLoginForm = false;
  public email: string;
  public password: string;
  public pass: string;
  public accountForm: FormGroup;
  public username: string;
  public isClicked = false;
  public isSignIn = false;
  public isFirstTime = false;

  public show = {
    loginComponent: true,
    signupComponent: false,
  };
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.accountForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
    });

    if (localStorage.getItem('accessToken') !== null) {
      this.isSignIn = true;
    } else {
      this.isSignIn = false;
    }
  }

  async signIn() {
    this.show.loginComponent = true;
    this.show.signupComponent = false;
    await this.firebaseService
      .signIn(this.accountForm.value.username, this.accountForm.value.pass)
      .then((responce) => {
        this.isSignIn = true;
        this.route.navigate(['/user']);
      });
  }

  async signUp() {
    this.show.loginComponent = false;
    this.show.signupComponent = true;
    await this.firebaseService.signUp(
      this.accountForm.value.username,
      this.accountForm.value.pass
    );
    if (this.firebaseService.isLoggedIn && this.firebaseService.isFirstTime) {
      this.isSignIn = true;
      this.isFirstTime = true;
      this.route.navigate(['/user']);
    } else {
      this.route.navigate(['/signup']);
    }
  }

  public isSignin() {
    this.show.loginComponent = true;
    this.show.signupComponent = false;
  }

  public isSignup() {
    this.show.loginComponent = false;
    this.show.signupComponent = true;
  }

  isLogout() {
    this.isSignIn = false;
  }
}
