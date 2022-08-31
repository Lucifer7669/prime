import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor(
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    //Menu Bar Items
    this.items = [
      { label: 'Home', routerLink: '/user', icon: 'pi pi-fw pi-home' },
      { label: 'Dashboard', routerLink: '/dashboard' },
    ];
    // Active Menu Index
    this.activeItem = this.items[0];
  }
  logOut() {
    window.alert('are you sure you want to logout');
    this.firebaseService.signOut().then(
      () => {
        localStorage.removeItem('accessToken');
        this.route.navigate(['/accounts']);
        localStorage.clear();
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
