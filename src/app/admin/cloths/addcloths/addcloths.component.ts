import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cloths } from 'src/app/model/Cloths';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addcloths',
  templateUrl: './addcloths.component.html',
  styleUrls: ['./addcloths.component.css']
})
export class AddclothsComponent implements OnInit {

  @Input()
  cloths!: Cloths;
  
  @Output()
  clothsAddedEvent = new EventEmitter();

 constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addCloths() {
    if (this.cloths.id == null) {
    this.httpClientService.createCloths(this.cloths).subscribe(
      (cloths) => {
        this.clothsAddedEvent.emit();
        this.router.navigate(['admin', 'cloths']);
       }
    );
    }
    else{
      this.httpClientService.updateCloths(this.cloths).subscribe(
        (cloths) => {
          this.clothsAddedEvent.emit();
          this.router.navigate(['admin', 'cloths']);
        }
      );
    }
  }


}
