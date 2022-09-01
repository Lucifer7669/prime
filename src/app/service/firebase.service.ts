import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData, UserList } from '../userdata.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public isLoggedIn = false;
  public isFirstTime = false;
  public accessToken: string;
  constructor(
    public firebaseAuth: AngularFireAuth,
    public firebaseService: AngularFirestore,
    public http: HttpClient
  ) {}

  //This Function is used For Sign In
  async signIn(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((responce: any) => {
        this.isLoggedIn = true;
        this.isFirstTime = false;
        localStorage.setItem(
          'accessToken',
          JSON.stringify(responce.user._delegate.accessToken)
        );
      });
  }

  //This Function is used For Sign Up
  async signUp(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((responce) => {
        this.isLoggedIn = true;
        this.isFirstTime = true;
        localStorage.setItem('accessToken', JSON.stringify(responce.user));
      });
  }

  //This Function is used for Logout user
  public signOut() {
    return this.firebaseAuth.signOut().then(() => {
      window.alert('You have been Log out');
    });
  }

  postUserData(userdata: any) {
    return this.http.post('http://localhost:3000/posts', userdata).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getUserData() {
    return this.http.get<UserData[]>('http://localhost:3000/posts').pipe(
      map((res) => {
        debugger;
        return res;
      })
    );
  }

  updateUserData(data: any, id: number) {
    return this.http.put('http://localhost:3000/posts/' + id, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteUserData(id: number) {
    return this.http.delete('http://localhost:3000/posts/' + id).pipe(
      map((res) => {
        return res;
      })
    );
  }

  //Mock API Fetch Method

  getMockData(): Observable<UserList[]> {
    return this.http
      .get<UserList[]>('https://demo1360295.mockable.io/userdata/get')
      .pipe(
        map((responce) => {
          return responce;
        })
      );
  }
}
