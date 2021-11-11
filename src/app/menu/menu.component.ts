import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JwtResponse } from '../model/JwtResponse';
import { Role } from '../model/Role';
import { User } from '../model/User';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService } from '../service/http-client.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    /*
    name$: any;
    name!: string;    
    Role = Role;
    visible!: boolean;
    users!: Array<User>;
    usersRecieved!: Array<User>;*/

    user!: User;
    currentUserSubscription!: Subscription;
    currentUser!: User ;
    root = '/';
    Role = Role;

    constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe((x: User) => this.user = x);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe((user: User) => {
       // alert("this.currentUser1"+this.currentUser);
     
        if (!user || user.role == Role.User) {
         // alert("this.currentUser2"+this.currentUser);
          //alert("this.currentUser.role"+this.currentUser.role);
            this.root = '/shop/books';
        } else if(!user || user.role == Role.Admin){
         // alert("this.currentUser :Admin"+this.currentUser);
         // alert("this.currentUser.role :Admin"+this.currentUser.role);
            this.root = '/admin/books';
        }else {
          this.root = '/';
      }
    });
  }

  ngOnInit(): void {
       /*this.name$ = this.httpClientService.getUsers().subscribe(
        response => this.handleSuccessfulResponse(response)
       );
       this.currentUser = Role.User; */       
  }
  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
}

logout() {
    this.authenticationService.logout();
}

signup() {
  /*if(this.visible == false ){
   this.visible = true; 
  }
  else{
    this.visible = true; 
  }*/
}



}
