import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { UsersComponent } from './admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { SignupComponent } from './signup/signup.component';
import { ClothsComponent } from './admin/cloths/cloths.component';
import { FoodComponent } from './admin/food/food.component';
import { ShopclothsComponent } from './shopcloths/shopcloths.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent ,canActivate:[AuthGaurdService] },
  { path: 'admin/books', component: BooksComponent ,canActivate:[AuthGaurdService] },
  { path: 'admin/cloths', component: ClothsComponent ,canActivate:[AuthGaurdService] },
  { path: 'admin/food', component: FoodComponent ,canActivate:[AuthGaurdService] },
  { path: 'shop/books', component: ShopbookComponent },
  { path: 'shop/cloths', component: ShopclothsComponent },
  {path: 'register', component: SignupComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'seller/productlist', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrdersComponent},
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
