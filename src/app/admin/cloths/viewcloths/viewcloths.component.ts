import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cloths } from 'src/app/model/Cloths';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewcloths',
  templateUrl: './viewcloths.component.html',
  styleUrls: ['./viewcloths.component.css']
})
export class ViewclothsComponent implements OnInit {

  @Input()
  cloths!: Cloths;
  
  @Output()
  clothsDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteCloths() {
    this.httpClientService.deleteCloths(this.cloths.id).subscribe(
      (book) => {
        this.clothsDeletedEvent.emit();
        this.router.navigate(['admin', 'cloths']);
      }
    );
  }

  editCloths() {
    this.router.navigate(['admin', 'cloths'], { queryParams: { action: 'edit', id: this.cloths.id } });
  }

}
