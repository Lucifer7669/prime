import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { Cities } from '../cities';
import { FirebaseService } from '../service/firebase.service';
import { UserData } from '../userdata.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  cols: any;
  title = 'prime';
  visibleSidebar1: boolean;
  name: string;
  email: string;
  displayBasic2: string;
  address: string;
  cities: Cities[];
  displayModal: boolean;
  displayTableModal: boolean;
  dropdown: string;
  skill: string;
  userform: FormGroup;
  form = new UserData();
  selectedCityCodes: string[];
  userData: UserData = new UserData();
  public isSignIn = false;
  products: any;
  @Output() isLogout = new EventEmitter<void>();
  constructor(
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private firebaseService: FirebaseService,
    private route: Router,
    public store: Store
  ) {}

  ngOnInit() {
    this.userform = this.fb.group({
      id: new FormControl('', [Validators.required, Validators.min(3)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      dropdown: new FormControl('', [Validators.required]),
    });

    this.primengConfig.ripple = true;

    // Dropdown For Selecting Citis
    this.cities = [
      { name: 'Pune', code: 'PUN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.getUserdata();
  }

  getUserdata() {
    const token = localStorage.getItem('accessToken');
    this.firebaseService.getUserData().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  postData() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.userData.id = this.userform.value.id;
      this.userData.name = this.userform.value.name;
      this.userData.email = this.userform.value.email;
      this.userData.address = this.userform.value.address;
      this.userData.dropdown = this.userform.value.dropdown;

      this.firebaseService.postUserData(this.userData).subscribe((res) => {
        alert('Data Added Successfully');
        this.userform.reset();
        this.getUserdata();
        this.displayModal = false;
      });
    }
  }

  editData(list: any) {
    alert('are you sure want to edit data');
    this.displayModal = true;
    this.userform.controls['id'].setValue(list.id);
    this.userform.controls['name'].setValue(list.name);
    this.userform.controls['email'].setValue(list.email);
    this.userform.controls['address'].setValue(list.address);
    this.userform.controls['dropdown'].setValue(list.dropdown);
  }

  updateData() {
    this.userData.id = this.userform.value.id;
    this.userData.name = this.userform.value.name;
    this.userData.email = this.userform.value.email;
    this.userData.address = this.userform.value.address;
    this.userData.dropdown = this.userform.value.dropdown;

    this.firebaseService
      .updateUserData(this.userData, this.userData.id)
      .subscribe((res) => {
        alert('Data Updated Successfully');
        this.getUserdata();
        this.userform.reset();
        this.displayModal = false;
      });
  }

  deleteData(list: any) {
    alert('are you sure want to delete data');
    this.firebaseService.deleteUserData(list.id).subscribe((responce) => {
      alert('Data Deleted');
      this.getUserdata();
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  showTableModal() {
    this.displayTableModal = true;
  }

  showDashboardModal() {
    this.route.navigate(['/dashboard']);
  }
}
