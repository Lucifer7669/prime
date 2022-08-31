import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { UserList } from '../userdata.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedUserData: UserList;
  userData: UserList[] = [];
  cols: any;
  constructor(private dashboardService: FirebaseService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.dashboardService.getMockData().subscribe((res) => {
        this.userData = res;
      });
    }
  }
}
