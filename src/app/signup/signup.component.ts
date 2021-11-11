import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  
  constructor(private httpClientService: HttpClientService,
    private router: Router ) {
    this.user = new User();

  }

  ngOnInit() { }

  onSubmit() {
    if (this.user.id == null) {
      this.httpClientService.createUser(this.user).subscribe(
        (user) => {
               this.router.navigate(['login']);
        }
      );
      alert("Signed Up Successfully!")
      }
    
  }

}
