import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/Book';
import { Cloths } from '../model/Cloths';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  currentUser: any;
  addBook(book: Book) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8087/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8087/users/add', newUser);   
  }

  deleteUser(id: number) {
    return this.httpClient.delete<User>('http://localhost:8087/users/' + id);
  }
  
  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8087/books/get');
  }

  createBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:8087/books/add', newBook);
  }

  deleteBook(id: string | number) {
    return this.httpClient.delete<Book>('http://localhost:8087/books/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>('http://localhost:8087/books/update', updatedBook);
  }

  getCloths() { 
    return this.httpClient.get<Cloths[]>('http://localhost:8087/cloths/get');
  }

  createCloths(newCloths: Cloths) {
    return this.httpClient.post<Cloths>('http://localhost:8087/cloths/add', newCloths);
  }

  deleteCloths(id: string | number) {
    return this.httpClient.delete<Cloths>('http://localhost:8087/cloths/' + id);
  }

  updateCloths(updatedCloths: Cloths) {
    return this.httpClient.put<Cloths>('http://localhost:8087/cloths/update', updatedCloths);
  }


  getFood() { 
    return this.httpClient.get<Food[]>('http://localhost:8087/Food/get');
  }

  createFood(newFood: Food) {
    return this.httpClient.post<Food>('http://localhost:8087/Food/add', newFood);
  }

  deleteFood(id: string | number) {
    return this.httpClient.delete<Food>('http://localhost:8087/Food/' + id);
  }

  updateFood(updatedFood: Food) {
    return this.httpClient.put<Food>('http://localhost:8087/Food/update', updatedFood);
  }

  createUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8087/users/add', newUser);
  }

  
  
}
