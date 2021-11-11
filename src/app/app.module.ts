import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { BooksComponent } from './admin/books/books.component';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { ViewbookComponent } from './admin/books/viewbook/viewbook.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { SignupComponent } from './signup/signup.component';
import { AddclothsComponent } from './admin/cloths/addcloths/addcloths.component';
import { ViewclothsComponent } from './admin/cloths/viewcloths/viewcloths.component';
import { ClothsComponent } from './admin/cloths/cloths.component';
import { FoodComponent } from './admin/food/food.component';
import { ShopclothsComponent } from './shopcloths/shopcloths.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { LogoutComponent } from './logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,   
    ViewuserComponent,
   AdduserComponent,
   BooksComponent,
   AddbookComponent,
  ViewbookComponent,
  ShopbookComponent,
  SignupComponent,
  FoodComponent,
  ClothsComponent,
  AddclothsComponent,
  ViewclothsComponent,
  ShopclothsComponent,
  LoginComponentComponent,
  ProductListComponent,
  CartComponent,
  OrdersComponent,
  LogoutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
