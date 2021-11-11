import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { JwtResponse } from '../model/JwtResponse';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

getAll() {
  return this.http.get<User[]>(`${apiUrl}/users`);
}

getById(id: number) {
  return this.http.get<User>(`${apiUrl}/users/${id}`);
}
}
