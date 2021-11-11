import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../model/Role';
import { User } from '../model/User';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService } from '../service/http-client.service';
//import { UserServiceService } from '../user-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
/*
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.userValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigateByUrl(returnUrl);
              },
              error: error => {
                  this.error = error;
                  this.loading = false;
              }
          });
  }//

  user!: User;
  currentUser!:String;

  email = 'Admin@email.com'
  password = 'Admin@123'
  invalidLogin = false
  constructor(private httpClientService: HttpClientService,
                 private router: Router ,
                 public loginservice: AuthenticationService) {
  //  this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['cart']); 
       /* if (this.loginservice.authenticate(this.email, this.password) ) {
        this.router.navigate(['admin', 'books']);        
        alert("Signed In Successfully!") ;
        this.invalidLogin = false
      } else
        this.invalidLogin = true
  }*/
  
    isInvalid!: boolean;
    isLogout!: boolean;
    submitted = false;
    model: any = {
        username: '',
        password: '',
        remembered: false
    };

    returnUrl = '/shop/books';
    loginForm: any;
    constructor(private AuthenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute) {
}

    ngOnInit(): void {
    }
  
    get f() { return this.loginForm.controls; }
    
    onSubmit() {
        this.submitted = true;
        this.AuthenticationService.login(this.model.email, this.model.password).subscribe(
            user => {
                if (user) {
                    if (user.role != Role.User) {
                      
                        this.returnUrl = '/admin/books';
                    }
                   
                    this.router.navigateByUrl(this.returnUrl);
                } else {
                   
                    this.isLogout = false;
                    this.isInvalid = true;
                }

            }
        );
    }
}
