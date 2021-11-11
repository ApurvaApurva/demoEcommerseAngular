import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cloths } from 'src/app/model/Cloths';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent implements OnInit {

  cloths!: Array<Cloths>;
  selectedCloths: any;
  action!: string;
  clothsRecieved!: Array<Cloths>;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getCloths().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        
        this.action = params['action'];
	
	      const id = params['id'];
         
        if (id) {
         this.selectedCloths = this.cloths.find(cloths => {return cloths.id === +id; });
        }
      }
    );
  }

  handleSuccessfulResponse(response: Cloths[]) {
    this.cloths = new Array<Cloths>();
    this.clothsRecieved = response;
    for (const cloths of this.clothsRecieved) {
    
      const clothswithRetrievedImageField = new Cloths();
      clothswithRetrievedImageField.id = cloths.id;
      clothswithRetrievedImageField.name = cloths.name;     
      clothswithRetrievedImageField.price = cloths.price;     
      this.cloths.push(clothswithRetrievedImageField);
    }
  }
  
  addCloths() {
    this.selectedCloths = new Cloths();
    this.router.navigate(['admin', 'cloths'], { queryParams: { action: 'add' } });
  }

  viewCloths(id: number) {
    this.router.navigate(['admin', 'cloths'], { queryParams: { id, action: 'view' } });
  }

}
