import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class Auth implements CanActivate {
  constructor(private route: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.route.navigate['/user'];
      return true;
    } else {
      this.route.navigate['/accounts'];
      return false;
    }
  }
}
