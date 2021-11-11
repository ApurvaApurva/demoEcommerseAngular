import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cloths } from '../model/Cloths';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopcloths',
  templateUrl: './shopcloths.component.html',
  styleUrls: ['./shopcloths.component.css']
})
export class ShopclothsComponent implements OnInit {

  cloths!: Array<Cloths>;
  clothsRecieved!: Array<Cloths>;
  cartCloths: any;
  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getCloths().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartCloths = JSON.parse(data);
    } else {
      this.cartCloths = [];
    }
  }
  handleSuccessfulResponse(response: Cloths[]) {
    this.cloths = new Array<Cloths>();
    //get books returned by the api call
    this.clothsRecieved = response;
    for (const cloths of this.clothsRecieved) {

      const clothswithRetrievedImageField = new Cloths();
      clothswithRetrievedImageField.id = cloths.id;
      clothswithRetrievedImageField.name = cloths.name;      
      clothswithRetrievedImageField.price = cloths.price;
     
      this.cloths.push(clothswithRetrievedImageField);
    }
  }

  addToCart(clothId: string | number) {
    //retrieve book from books array using the book id
    let cloths: any = this.cloths.find(cloth => {
      return cloth.id === +clothId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(cloths);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    cloths.isAdded = true;
  }

  updateCartData(cartData: any) {
    this.cartCloths = cartData;
  }

  goToCart() {
    this.router.navigate(['cart']);  
    this.emptyCart() ;   
  }

  emptyCart() {
    this.cartCloths = [];
    localStorage.clear();
  }

}
