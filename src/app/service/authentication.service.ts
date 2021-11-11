import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

import { User } from '../model/User';

import { JwtResponse } from '../model/JwtResponse';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 /* constructor() { }

  
  authenticate(username: string, password: string) {
    if (username === "Admin@email.com" && password === "Admin@123") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }*/

  private userSubject: BehaviorSubject<JwtResponse> | any ;
  public currentUser: Observable<JwtResponse> | any ;
  
 public nameTerms = new Subject<string>();

  constructor(
      private router: Router,
      private http: HttpClient,
      private cookieService: CookieService
  ) {
    const memo = localStorage.getItem('user')
    this.userSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo!));
    this.currentUser = this.userSubject.asObservable();
     cookieService.set('currentUser', memo!);
  }

  public get userValue() {
      return this.userSubject.value;
  }

  login(username: string, password: string): Observable<JwtResponse> {
    
      const url = `${apiUrl}`;
      return this.http.post<JwtResponse>(url, { username, password }).pipe(
          tap(user => {
              if (user && user.token) {
                  this.cookieService.set('currentUser', JSON.stringify(user));
                  console.log((user.name));
                  this.nameTerms.next(user.name);
                  this.userSubject.next(user);
                  return user;
              }
              else{ return user;}
          }),
     
      );
  }
  

  logout() {
     /* // remove user from local storage to log user out
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/login']);*/
  }
}
